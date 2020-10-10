import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
const expenseDashboardPage = () => (<div>Expense Dashboard Page</div>);
const addExpensePage = () => (<div>Add Expense Page</div>);
const helpPage = () => (<div>Help Page</div>);
const editPage = () => (<div>Edit Page</div>);
const noFoundPage = () => (<div>404! <Link to="/">Go Home</Link></div>);
const Header = () => (<header>
      <h1>Expensify App</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
</header>);
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