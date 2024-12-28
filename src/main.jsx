import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { gastosReducer } from "./reducers/gastosReducer.js";
import { userIdReducer } from "./reducers/userIdReducer.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const reducers = combineReducers({ gastos: gastosReducer, userId: userIdReducer });
const store = createStore(reducers);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="915561866834-cle762d6omvtvin6l9qmdn59cgafl21p.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
