import React, { useEffect, useState } from "react";
import { login } from "../../../axios/axios";
import LoginForm from "../../../components/LoginForm";
import "../../paginas.css";

const Login = (props) => {
  const setEstado = props.setEstado;
  // const [teste, setTeste] = useState('')

  // useEffect(() => {
  //     login(setTeste)
  // }, [])

  const handle_login = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:8000/token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.user.username)
        localStorage.setItem("token", json.token);
        setEstado({
          
          displayed_form: "",
          username: json.user.username,
          logged_in: true,
        });
      });
  };

  return (
    <div className="page-area">
      <div className="container">
        <h1>Login</h1>

        <LoginForm handle_login={handle_login} />
      </div>
    </div>
  );
};

export default Login;
