import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TodosProvider from "./contextProviders/TodosProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
