import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { initializeIcons } from "@uifabric/icons";
import { App } from "./App";
import { ThemeProvider } from "./theme/themeContext";
import * as serviceWorker from "./serviceWorker";

initializeIcons();

ReactDOM.render(
  <ThemeProvider>
    <Fabric>
      <App />
    </Fabric>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
