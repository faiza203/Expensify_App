import "./../styles/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AapRoutes from "./RoutesComponents/routes";
import { addExpense, addExpenses, setTextFilters } from "./action/expenses";
import giveVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore.js";

const store = configureStore();
store.dispatch(addExpense({ description: "Water Bill" }));;
const state = store.getState();
const visibleExpenses = giveVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
<Provider store={store}>
  <AapRoutes />
</Provider>
    )
ReactDOM.render(jsx, document.getElementById("app"))
