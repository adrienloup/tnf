import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { version } from "@/package.json";
import { Provider } from "@/src/Provider";
import App from "@/src/App";
import "@/src/generic/language";

createRoot(document.getElementById("_tnf_1mm2_3")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

console.log(
  `%c[tnf]%c${version}%c@jff`,
  "padding: 4px 3px 3px; background: #000; font-weight: bold; color: #fff;",
  "padding: 4px 3px 3px; background: #fff; font-weight: bold; color: #000;",
  "padding: 4px 3px 3px; background: #000; font-weight: bold; color: #fff;"
);
