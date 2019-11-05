import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Counter from "./Counter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer/reducer";
import thunk  from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootElement
);
