import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose  } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  ThemeProvider
} from "@material-ui/core";
// import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import reducer from "./components/redux/reducers";
import App from "./App";
import theme from './theme';
import './index.css'

require("dotenv").config();

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
        <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
