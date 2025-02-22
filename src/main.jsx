import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'select2/dist/js/select2.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
  </StrictMode>
);
