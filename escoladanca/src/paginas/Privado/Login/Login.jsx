import React, { useEffect, useState } from "react";
import { login } from "../../../axios/axios";
import LoginForm from "../../../components/LoginForm";
import "../../paginas.css";
import {
  Link
} from "react-router-dom";

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

  const handle_logout = () => {
    localStorage.removeItem('token');
    setEstado({ logged_in: false, username: '', displayed_form: "", });
  };

  return (
    <div className="page-area">
      <div className="container">
        <h1>Login</h1>

        <LoginForm handle_login={handle_login} />
        <button onClick={handle_logout}>LOGOUT</button>
        <button><Link  to='cadastro/'>CADASTRAR ALUNO</Link></button>
      </div>
    </div>
  );
};

export default Login;
