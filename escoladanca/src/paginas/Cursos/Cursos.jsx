import {getCursos} from '../../axios/axios'
import React, { useEffect, useState } from 'react';
import '../paginas.css';
import './Cursos.css'

const Cursos = () => {
    const[cursos, setCursos] = useState([{nome: ''}])

    useEffect(() => {
        getCursos(setCursos, {headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },})
        
    }, [])

    console.log(cursos)

    return(
        <div className='page-area'>
            <div className='container'>
                <h1>Cursos</h1>
                <p>{cursos[0].nome}</p>
            </div>
        </div>
    )
}

export default Cursos;