import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./header";
import addExpensePage from "./create"
import expenseDashboardPage from "./dashboard";
import helpPage from "./help";
import editPage from "./edit";
import noFoundPage from "./noFound";
const AapRoutes  = () =>(
      <BrowserRouter>
            <Header />
            <Switch>
            <Route path="/" component={expenseDashboardPage} exact={true} />
            <Route path="/create" component={addExpensePage} />
            <Route path="/help" component={helpPage} />
            <Route path="/edit" component={editPage} />
            <Route component={noFoundPage} />
            </Switch>           
      </BrowserRouter>
)
export default AapRoutes;
