import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./header"
import expenseDashboardPage from "./dashboard";
import portfolioPage from "./portfolio"
import contactPage from "./contact";
import noFoundPage from "./noFound";
const AapRoutes  = () =>(
      <BrowserRouter>
            <Header />
            <Switch>
                  <Route path="/" component={expenseDashboardPage} exact={true} />
                  <Route path="/portfolio" component={portfolioPage} />
                  <Route path="/contact" component={contactPage} />
                  <Route component={noFoundPage} />
            </Switch>
      </BrowserRouter>
)
export default AapRoutes;