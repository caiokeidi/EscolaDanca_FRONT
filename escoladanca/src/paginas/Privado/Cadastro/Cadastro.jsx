import React, { useState } from "react";

const Cadastro = () => {
  const [dados, setDados] = useState({
    primeiroNome: "",
    sobrenome: "",
    dataNascimento: "2020/01/01",
    rg: "114445552",
    cpf: "11133322244",
    telefone: "11984115555",
    email: "",
  });

  console.log(dados);

  const handleCadastro = (e, data) => {
    e.preventDefault();
   

    fetch("http://localhost:8000/aluno/cadastro/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        localStorage.setItem("token", json.token);
        
      });

    ///PRECISO MANDAR OS DADOS PARA O BACK END AGORA
  };

  var handleChange = (e) => {
    let newDados = { ...dados };
    let value = e.target.value;
    let name = e.target.name;

    newDados[name] = value;
    setDados(newDados);
  };

  //   primeiroNome = models.CharField(max_length=20)
  //     sobrenome = models.CharField(max_length=80)
  //     dataNascimento = models.DateField()
  //     rg = models.CharField(max_length=9)
  //     cpf = models.CharField(max_length=11)
  //     telefone = models.CharField(max_length=11)

  return (
    <div className="page-area">
      <div className="container">
        <h1>Cadastro</h1>
        <form onSubmit={(e) => handleCadastro(e, dados)}>
          <label>Primeiro Nome </label>
          <input
            className="input-cadastro"
            type="text"
            name="primeiroNome"
            value={dados.primeiroNome}
            onChange={handleChange}
          />
          <label>Sobrenome </label>
          <input
            className="input-cadastro"
            type="text"
            name="sobrenome"
            value={dados.sobrenome}
            onChange={handleChange}
          />
          <label>Data de Nascimento </label>
          <input
            className="input-cadastro"
            type="date"
            name="dataNascimento"
            onChange={handleChange}
          />
          <label>RG </label>
          <input
            className="input-cadastro"
            type="text"
            name="rg"
            value={dados.rg}
            onChange={handleChange}
          />
          <label>CPF </label>
          <input
            className="input-cadastro"
            type="text"
            name="cpf"
            value={dados.cpf}
            onChange={handleChange}
          />
          <label>Telefone </label>
          <input
            className="input-cadastro"
            type="text"
            name="telefone"
            value={dados.telefone}
            onChange={handleChange}
          />
          <label>Email </label>
          <input
            className="input-cadastro"
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
          <input type="submit" placeholder="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
