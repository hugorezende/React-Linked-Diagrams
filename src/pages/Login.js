import React, { useEffect, useRef } from "react";
import { Redirect} from "react-router-dom";
import { useAuthDataContext } from "../components/AuthDataProvider";
import authentication from "../api/authentication";

export default function Login(props) {
  const inputUser = useRef(null);
  const inputPass = useRef(null);
  const userInfo = useAuthDataContext();
  
  useEffect(() => {
    
    authentication.Auth().then(function(response) {
      userInfo.onLogin({ user: response.data.user });
    });
  }, [userInfo]);

  function login() {
    let data = {
      user: inputUser.current.value,
      password: inputPass.current.value
    };

    authentication.Login(data).then(function(response) {
      if (response.status === 200) {
        userInfo.onLogin({ user: response.data.user });
      }
    });
  }

  return (
    <div>
        
      {userInfo.authData && (
        <Redirect to={ props.location.state ? props.location.state.from.pathname:"/dashboard"} />
      )}
      <h3>Login</h3>
      <input placeholder="user" type="email" ref={inputUser}></input>
      <br />
      <input placeholder="password" type="password" ref={inputPass}></input>
      <br />
      <button onClick={login}>login</button>
    </div>
  );
}
