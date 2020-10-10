import "./../styles/style.scss";
import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch ,Link , NavLink} from "react-router-dom";
const expenseDashboardPage = () => (<div>Expense Dashboard Page</div>);
const addExpensePage = () => (<div>Add Expense Page</div>);
const helpPage = () => (<div>Help Page</div>);
const editPage = () => (<div>Edit Page</div>);
const noFoundPage = () => (<div>404! <NavLink to="/">Go Home</NavLink></div>);
const routes = (
      <BrowserRouter>
            <Switch>
                  <Route path="/" component={expenseDashboardPage} exact={true} />
                  <Route path="/create" component={addExpensePage} />
                  <Route path="/help" component={helpPage} />
                  <Route path="/edit" component={editPage} />
                  <Route component={noFoundPage} />
            </Switch>
      </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById("app"))
// ReactDOM.render(<p>I am react</p>  , document.getElementById("p"))
