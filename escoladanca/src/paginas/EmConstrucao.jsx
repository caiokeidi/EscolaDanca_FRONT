import React, { useEffect, useState } from 'react';
import '../paginas.css';
import './Cursos.css'

const EmConstrucao = (props) => {
    const[cursos, setCursos] = useState([{nome: ''}])

    return(
        <div className='page-area'>
            <div className='container'>
                <h1>ÁREA EM CONSTRUÇÃO</h1>
            </div>
        </div>
    )
}

export default EmConstrucao;