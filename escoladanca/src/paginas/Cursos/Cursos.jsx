import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import "../paginas.css";
import "./Cursos.css";

const Cursos = (props) => {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      nome: "Zouk",
      niveis: "Iniciante, Intermediário, Avançado e Profissional",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
      ativo: true,
    },
  ]);

  const [imgs, setImgs] = useState([{
    "base64_image":'',
    "id": 1,
    "curso": 1
}])

  useEffect(() => {
    fetch(`http://localhost:8000/image/`).then((res) =>
      res.json().then((array) => {
        setImgs(array)
      })
    );
  }, [])
  

  useEffect(() => {
    fetch("http://localhost:8000/cursos/")
      .then((res) => res.json())
      .then((array) => {
        let arrayCursos = [];
        array.forEach((curso) => {
          let dictCursos = {
            id: curso.id,
            nome: curso.nome,
            niveis: curso.niveis,
            descricao: curso.descricao,
            ativo: curso.ativo,
          };

          console.log(dictCursos);
          arrayCursos.push(dictCursos);
        });

        setCursos(arrayCursos);
      });

    console.log(cursos);
  }, []);

  const img = require("../../assets/img/ballet1.png");

  const buscaImagemCurso = async (id) => {
    await fetch(`http://localhost:8000/image/`).then((res) =>
      res.json().then((array) => {
        console.log(array);
        return array[0];
      })
    );
  };

  const returnCards = (curso) => {
    return (
      <div className="card-curso" key={curso.id}>
        <div className="card-over-area">
          <h2 className="card-title">{curso.nome}</h2>
        </div>

        {returnImg(curso.id)}
        
      </div>
    );
  };

  const returnImg = (id) => {
    const img64 = imgs.filter((item) => {return(item.id == id)})
    if(!img64[0]){
      return(
        <img
            className="card-img"
            src={img.default}
            alt="imagem dança de salão"
          />
      )
    }else{
      const data = img64[0]['base64_image']
      return(
        <img
            className="card-img"
            src={`data:image/jpeg;base64,${data}`}
            alt="imagem dança de salão"
          />
      )
    }
    
  }

  

  return (
    <div className="page-area">
      <div className="container anim1">
        <div className="page-title-area">
          <h1>Cursos</h1>
        </div>
        <div className="page-content-area">
          {cursos.map((curso) => {
            return returnCards(curso);
          })}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
