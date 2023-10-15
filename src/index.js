import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { RecoilRoot } from 'recoil';
import { StoreProvider } from "./context/storecontext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<RecoilRoot>
  <StoreProvider>
<AppProvider>
<FilterContextProvider>
    <App />
    </FilterContextProvider>
  </AppProvider>
  </StoreProvider>
  </RecoilRoot>
);
reportWebVitals();