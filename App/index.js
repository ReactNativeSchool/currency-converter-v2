import React, { useEffect } from "react";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { configureLocalization } from "./util/Localization";

export default () => {
  useEffect(() => {
    configureLocalization();
  }, []);

  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};
