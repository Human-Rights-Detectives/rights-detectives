import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router";
import StartPage from "./domains/start/pages/StartPage.tsx";
import MainPage from "./domains/main/pages/MainPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
