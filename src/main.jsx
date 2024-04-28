import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from "./app/store";
import { Provider } from "react-redux";
import App from './App';
import React from 'react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
