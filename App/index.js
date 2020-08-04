import React from "react";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { useLocalization } from "./util/Localization";

export default () => {
  const { ready } = useLocalization();

  if (!ready) {
    return null;
  }

  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};
