import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppContext.jsx";
import App from "./App.jsx";
import Game from "./pages/Game.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
