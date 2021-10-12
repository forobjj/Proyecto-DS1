import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className="contenedor"><button className="iniciar" onClick={() => loginWithRedirect()}>Iniciar Sesión</button></div>
};