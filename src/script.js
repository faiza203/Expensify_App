import "./../styles/style.scss";
import React from "react";
import ReactDOM from "react-dom"
import AapRoutes from "./RoutesComponents/routes";
import store from "./store/expenses";
ReactDOM.render(<AapRoutes />, document.getElementById("app"))
