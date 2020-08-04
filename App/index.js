import React from "react";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { useLocalization } from "./util/Localization";
import { ThemeContextProvider } from "./util/Theme";

export default () => {
  const { ready } = useLocalization();

  if (!ready) {
    return null;
  }

  return (
    <ConversionContextProvider>
      <ThemeContextProvider>
        <Navigation />
      </ThemeContextProvider>
    </ConversionContextProvider>
  );
};
