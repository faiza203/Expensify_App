import "./app.js";
import React from "react";
import ReactDOM from "react-dom"
console.log(React , ReactDOM);
class Paragraph extends React.Component {
      render(){
         return <p>I am paragraph</p>
      }
}
ReactDOM.render(<Paragraph />  , document.getElementById("app"))