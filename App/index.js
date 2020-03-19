import React from "react";

import Navigation from "./config/navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { ThemeContextProvider } from "./util/ThemeContext";

export default () => (
  <ConversionContextProvider>
    <ThemeContextProvider>
      <Navigation />
    </ThemeContextProvider>
  </ConversionContextProvider>
);
