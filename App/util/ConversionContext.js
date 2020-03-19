import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";

import { api } from "./api";

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "GBP";

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, _setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [rates, setRates] = useState({});

  const setBaseCurrency = currency => {
    setIsLoading(true);

    return api(`/latest?base=${currency}`)
      .then(res => {
        _setBaseCurrency(currency);
        setDate(res.date);
        setRates(res.rates);
      })
      .catch(error => {
        Alert.alert("Sorry, something went wrong.", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setQuoteCurrency = currency => {
    _setQuoteCurrency(currency);
  };

  const swapCurrencies = () => {
    const newBase = quoteCurrency;
    const newQuote = baseCurrency;
    return setBaseCurrency(newBase).then(() => {
      return setQuoteCurrency(newQuote);
    });
  };

  useEffect(() => {
    setBaseCurrency("USD");
  }, []);

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    date,
    setBaseCurrency,
    setQuoteCurrency,
    isLoading,
    swapCurrencies,
    rates
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
