import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppContext.jsx";
import Game from "./pages/Game.jsx";
import Layout from "./components/Layout.jsx";
import App from "./App.jsx";
import "./styles/index.scss";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<Layout />}>
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
