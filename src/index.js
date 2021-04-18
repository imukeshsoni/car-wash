import React from "react";
import ReactDOM from "react-dom";
import App from "./views/app";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5vkb5f9s.us.auth0.com"
    clientId="Bmu7Sw8YAOeljDQzfexSf7QY47g8jsRM"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
