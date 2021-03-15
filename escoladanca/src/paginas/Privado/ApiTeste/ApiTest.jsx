import React, { useEffect, useState } from "react";
import { busca } from "../../../axios/axios";
import "../../paginas.css";

const Login = () => {
  const [dados, setDados] = useState([
    {
      id: 0,
      codigo: "",
      nome: "",
      nivel: "",
      descricao: "",
    },
  ]);

  useEffect(() => {
    busca(setDados);
  }, []);

  return (
    <div className="page-area">
      <div className="container">
        <h1>Login</h1>
        <p>{dados[0].nome}</p>
      </div>
    </div>
  );
};

export default Login;
