import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "swiper/css";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import ToastProvider from "./components/ToastProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
        <ToastProvider />
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
