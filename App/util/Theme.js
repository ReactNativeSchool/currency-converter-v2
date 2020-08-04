import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import colors from "../constants/colors";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, _setThemeColor] = useState(colors.blue);

  const setThemeColor = (color) => {
    _setThemeColor(color);
    AsyncStorage.setItem("CurrencyConverter::THEME_COLOR", color);
  };

  useEffect(() => {
    AsyncStorage.getItem("CurrencyConverter::THEME_COLOR").then((color) => {
      if (color) {
        setThemeColor(color);
      } else {
        setThemeColor(colors.blue);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {themeColor ? children : null}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
