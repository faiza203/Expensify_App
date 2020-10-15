import "./../styles/style.scss";
import React from "react";
import ReactDOM from "react-dom"
import AapRoutes from "./RoutesComponents/routes";
import {addExpense, addExpenses , setTextFilters} from "./action/expenses";
import giveVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore.js";

const store = configureStore();
store.dispatch(addExpense({description : "Water Bill"}));;
const state = store.getState();
const visibleExpenses = giveVisibleExpenses(state.expenses , state.filters);
console.log(visibleExpenses);
ReactDOM.render(<AapRoutes />, document.getElementById("app"))
