import React from 'react'
import "./estilos/Login.css";
import {loginUrl} from "./spotify";
import makeRequest from "./App";
import code from "./App";

function Login() {
    return (
        <div className="LoginBody">
      <h1>Fuzzy</h1>
      <a className="btn" href={loginUrl}>Login with Spotify</a>
      {code && <h3>Logged in</h3>}
      <button className="btn" onClick={makeRequest}>Request to Web API</button>
    </div>
    )
}
export default Login
