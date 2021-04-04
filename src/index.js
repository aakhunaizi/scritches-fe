import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Styling
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Routing
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    lightBlue: { main: "#87BCDE" },
    orange: { main: "#EB5E28", light: "#EE7343" },
    darkGrey: { main: "#292929" },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
