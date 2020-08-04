import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { api } from "./api";

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "GBP";

const save = (key, data) => {
  return AsyncStorage.setItem(`CurrencyConverter::${key}`, data);
};

const get = (key) => {
  return AsyncStorage.getItem(`CurrencyConverter::${key}`);
};

const CACHE_KEYS = {
  QUOTE_CURRENCY: "QUOTE_CURRENCY",
  BASE_CURRENCY: "BASE_CURRENCY",
  DATE: "DATE",
  RATES: "RATES",
};

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, _setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    setIsLoading(true);
    return Promise.all([get(CACHE_KEYS.DATE), get(CACHE_KEYS.RATES)])
      .then(([cachedDate, cachedRates]) => {
        if (cachedDate) {
          setDate(cachedDate);
        }

        if (cachedRates) {
          setRates(JSON.parse(cachedRates));
        }

        _setBaseCurrency(currency);

        return api(`/latest?base=${currency}`);
      })
      .then((response) => {
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);

        return Promise.all([
          save(CACHE_KEYS.BASE_CURRENCY, currency),
          save(CACHE_KEYS.DATE, response.date),
          save(CACHE_KEYS.RATES, JSON.stringify(response.rates)),
        ]);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Sorry, something went wrong!", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setQuoteCurrency = (currency) => {
    _setQuoteCurrency(currency);
    return save(CACHE_KEYS.QUOTE_CURRENCY, currency);
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    Promise.all([
      get(CACHE_KEYS.BASE_CURRENCY),
      get(CACHE_KEYS.QUOTE_CURRENCY),
    ]).then(([cachedBase, cachedQuote]) => {
      if (cachedQuote) {
        setQuoteCurrency(cachedQuote);
      }

      return setBaseCurrency(cachedBase || DEFAULT_BASE_CURRENCY);
    });
  }, []);

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
