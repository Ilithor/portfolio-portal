import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Navbar, Resume, SocMon, GitHub } from "./components";

/** Renders the portfolio portal
 *
 * @type {React.FunctionComponent}
 */
export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/resume" component={Resume} />
      <Route path="/socmon" component={SocMon} />
      <Route path="/github" component={GitHub} />
      <Redirect from="/" to="/resume" />
    </Switch>
  </Router>
);
