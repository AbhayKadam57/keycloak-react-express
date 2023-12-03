import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const isRun = useRef(false);

  const [isLogin, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const client = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID,
  });

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    client
      .init({ onLoad: "login-required", checkLoginIframe: false })
      .then((authenticated) => {
        console.log(authenticated);
        setIsLoggedIn(authenticated);
        setToken(client.token);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return [isLogin, token];
};

export default useAuth;
