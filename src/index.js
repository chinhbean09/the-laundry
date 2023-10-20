import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { RecoilRoot } from 'recoil';
import { StoreProvider } from "./context/storecontext";
import { FilterStoreContextProvider } from "./context/storefilter_context";
import { CartProvider } from "./context/cart_context";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <RecoilRoot>
    <StoreProvider>
      <FilterStoreContextProvider>
        <AppProvider>
          <FilterContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterContextProvider>
        </AppProvider>
      </FilterStoreContextProvider>
    </StoreProvider>
  </RecoilRoot>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
