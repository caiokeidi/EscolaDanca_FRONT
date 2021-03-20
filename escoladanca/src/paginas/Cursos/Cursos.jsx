import React, { useEffect, useState } from 'react';
import '../paginas.css';
import './Cursos.css'

const Cursos = (props) => {
    
    const img = require("../../assets/img/ballet1.png")

    return(
        <div className='page-area'>
            <div className='container'>
                <div className='page-title-area'>
                    <h1>Cursos</h1>
                </div>
                <div className='page-content-area'>
                    <div className='card-curso'>
                        <div className='card-over-area'>
                            <h2 className='card-title'>Título</h2>
                        </div>
                        
                        <img className='card-img' src={img.default} alt='imagem dança de salão'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cursos;