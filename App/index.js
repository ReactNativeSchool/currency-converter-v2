import React from "react";

import Navigation from "./config/navigation";
import { ConversionContextProvider } from "./util/ConversionContext";

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
);
