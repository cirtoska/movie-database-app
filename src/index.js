import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./utilities/store";
// import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-3sd5tbxx6pu0qw0a.us.auth0.com"
      clientId="gWtQ6A5lBQxNwhcXfrRmmqg2kxw3X2CR"
      redirectUri={window.location.origin}
    > */}
    <Provider store={store}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Router>
    </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
