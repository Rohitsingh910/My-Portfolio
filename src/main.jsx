import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import App from "./App";
import "./index.css";

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);