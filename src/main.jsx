import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/store";
import { GlobalStyle } from "./global.styles";

const httpLink = new HttpLink({
  uri: "https://ecommerce-api-apollo1376.herokuapp.com/",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("auth_token");
  operation.setContext({
    Headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
