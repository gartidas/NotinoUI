import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TodosProvider from "./contextProviders/TodosProvider";
import GlobalStyles from "./utils/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
