import React, { useContext } from "react";
import { userContext } from "../Context/AppContextProduct";
import { Navigate } from "react-router-dom";

const Login = () => {
const value = useContext(userContext)
const {isAuth,toggelAuth} = value
if(isAuth){
  return <Navigate to={'/'}/>
}
  return (
    <div>
      <h1>Login</h1>
      <button onClick={toggelAuth}>Login</button>
    </div>
  );
};

export default Login;
