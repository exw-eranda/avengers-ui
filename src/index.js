import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Avenger from "./components/avenger";

// h1 tag using react
// var firstElement = React.createElement("h1", null, "Hello world!") :- BABEL
// const firstElement = <h1>Hello World!</h1> 

ReactDOM.render(<Avenger/>, document.getElementById("root"));