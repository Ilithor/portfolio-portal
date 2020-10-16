import React from "react";
import { Fabric } from "office-ui-fabric-react";
import { ThemeProvider } from "./theme/themeContext";

/** Renders the app wrapped in various providers
 *
 * @type {React.FunctionComponent}
 */
export const DataProvider = ({ children }) => (
  <ThemeProvider>
    <Fabric>{children}</Fabric>
  </ThemeProvider>
);
