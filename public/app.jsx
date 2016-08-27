const React = require('react');
const ReactDOM = require('react-dom');
const Greeter = require("./components/Greeter");

var name = "Bobby";

ReactDOM.render(
    <Greeter name={name} message={"How are you today?"}/>, document.getElementById("app"));
