import React, { createContext, useEffect } from "react";
import { AsyncStorage } from "react-native";

import colors from "../constants/colors";

const getStoredTheme = () => {
  return AsyncStorage.getItem("CurrencyConverter::themeColor");
};

const setStoredTheme = color =>
  AsyncStorage.setItem("CurrencyConverter::themeColor", color);

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = React.useState(colors.blue);
  const [themeLoading, setThemeLoading] = React.useState(true);

  const changeTheme = color => {
    setThemeColor(color);
    setStoredTheme(color);
  };

  useEffect(() => {
    setThemeLoading(true);
    getStoredTheme()
      .then(color => {
        if (color) {
          setThemeColor(color);
        }
      })
      .finally(() => {
        setThemeLoading(false);
      });
  }, []);

  const contextValue = {
    themeColor,
    themeLoading,
    changeTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
