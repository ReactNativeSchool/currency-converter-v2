import { useEffect, useState } from "react";
import i18n from "i18n-js";
import { AppState } from "react-native";
import * as Localization from "expo-localization";

const translations = {
  en: {
    currencyConverter: "Currency Converter",
    reverseCurrencies: "Reverse Currencies",
    baseCurrency: "Base Currency",
    quoteCurrency: "Quote Currency",
    asOf: "as of",
    home: "Home",
    options: "Options",
    themes: "Themes",
    rNBasics: "React Native Basics",
    rnByExample: "React Native by Example",
  },
  es: {
    currencyConverter: "Convertidor de Moneda",
    reverseCurrencies: "Monedas Inversas",
    baseCurrency: "Moneda Base",
    quoteCurrency: "Moneda de Cotización",
    asOf: "",
    home: "",
    options: "",
    themes: "",
    rNBasics: "",
    rnByExample: "",
  },
};
export const useLocalization = () => {
  const [ready, setReady] = useState(false);
  const configureLocalization = () => {
    i18n.translations = translations;
    i18n.fallbacks = true;

    Localization.getLocalizationAsync().then((response) => {
      i18n.locale = response.locale;
      setReady(true);
    });
  };

  useEffect(() => {
    configureLocalization();

    AppState.addEventListener("change", configureLocalization);

    return () => {
      AppState.removeEventListener("change", configureLocalization);
    };
  }, []);

  return { ready };
};
