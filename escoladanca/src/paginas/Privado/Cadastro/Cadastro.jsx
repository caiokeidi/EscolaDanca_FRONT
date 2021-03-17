import React, { useState } from "react";

const Cadastro = () => {

    const [dados, setDados] = useState({primeiroNome: '',
     sobrenome: '',
      dataNascimento: '2020-01-01',
       rg: '114445552',
        cpf:'11133322244',
        telefone:'11984115555'})


  const handleCadastro = (data) => {
    return true
  }



  var handleChange = (e) => {
    let newDados = [dados]
    let value = e.target.value
    let name = e.target.name

    newDados[name] = value
    setDados(newDados)
  }

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
            <form onSubmit={handleCadastro(dados)}>
                <label>Primeiro Nome</label>
                <input className='input-cadastro'
                type='text'
                name='primeiroNome'
                value={dados.primeiroNome}
                onChange={handleChange}
                />
            </form>
      </div>
    </div>
  );
  
};



export default Cadastro;
