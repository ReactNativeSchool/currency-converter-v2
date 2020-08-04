import React, { createContext, useState, useContext } from "react";

import colors from "../constants/colors";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(colors.blue);

  console.log("themeColor", themeColor);

  return (
    <ThemeContext.Provider value={{ setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
