import React from "react";
import "../paginas.css";
import "./Escola.css";
import img from "../../assets/img/ballet1.png";
import img2 from "../../assets/img/contemporaneo2.png";

const Escola = () => {
  return (
    <div className="page-area">
      <div className="container anim1">
        <div className="page-title-area">
          <h1 className="page-title-h1">A ESCOLA</h1>
        </div>
        <div className="page-mainImage-area">
          <img className="page-mainImage-img" src={img} alt="ballet img" />
        </div>
        <div className="page-text-area">
          <p className="page-text-p1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            doloremque quas aut minima enim officiis illum accusantium
            repellendus! Est quod necessitatibus quibusdam veritatis architecto
            nisi earum optio incidunt quaerat. Quo.
          </p>
          <p className="page-text-p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed
            recusandae voluptates dolorum, sapiente at nesciunt perferendis
            itaque. Veritatis magnam eius facilis at deleniti accusantium
            excepturi necessitatibus rerum pariatur aspernatur.
          </p>
        </div>
        <div className="page-mainImage-area">
          <img className="page-mainImage-img2" src={img2} alt="ballet img" />
        </div>
        <div className="page-text-area">
          <p className="page-text-p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nihil porro esse sapiente et. Delectus dolorem ab ea consequuntur?
            Nesciunt placeat vel ut magni harum fuga deserunt veritatis eligendi
            architecto. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Escola;
