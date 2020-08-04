import i18n from "i18n-js";

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

export const configureLocalization = () => {
  // i18n.locale = "en";
  i18n.locale = "es";
  i18n.translations = translations;
  i18n.fallbacks = true;
};
