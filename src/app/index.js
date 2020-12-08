import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/global.css";
import * as serviceWorker from "../serviceWorker";

ReactDOM.render(<App />, document.getElementById("app"));

serviceWorker.unregister();
