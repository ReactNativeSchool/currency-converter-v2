import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./config/navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { ThemeContextProvider } from "./util/ThemeContext";

export default () => (
  <SafeAreaProvider>
    <ConversionContextProvider>
      <ThemeContextProvider>
        <Navigation />
      </ThemeContextProvider>
    </ConversionContextProvider>
  </SafeAreaProvider>
);
