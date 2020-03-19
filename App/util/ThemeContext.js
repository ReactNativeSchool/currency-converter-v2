import React, { createContext } from "react";

import colors from "../constants/colors";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = React.useState(colors.blue);

  const changeTheme = color => {
    setThemeColor(color);
  };

  const contextValue = {
    themeColor,
    changeTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
