import React, { createContext, useState, useContext } from "react";

import colors from "../constants/colors";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(colors.blue);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
