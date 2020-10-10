import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
const Header = () => (<header>
    <h1>Expensify App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
</header>);
export default Header;