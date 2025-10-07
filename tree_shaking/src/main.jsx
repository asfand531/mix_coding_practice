import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/src/sw.js")
      .then(() => console.log("[SW] Registered!"))
      .catch((err) => console.error("[SW] Failed:", err));
  });
}
