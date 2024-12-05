import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gastos from "./Gastos.jsx";
import { NuevoGasto } from "./NuevoGasto.jsx";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { gastosReducer } from "./reducers/gastosReducer.js";
const reducers = combineReducers({ gastos: gastosReducer });
const store = createStore(reducers);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NuevoGasto />
    </Provider>
  </StrictMode>
);
