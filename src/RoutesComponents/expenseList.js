import react from "react";
import { connect } from "react-redux";
const ExpenseList = ()=>(
    <div>
    <h1>Expense List</h1>
    </div>
);
const connectExpenseList = connect((state) => {
 return {
     name: "Faiza"
 },(ExpenseList)
});
export default connectExpenseList;