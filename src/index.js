import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { Store } from "./Store/index";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />}>
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
