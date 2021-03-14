import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../Cabecalho.css'

const Navegacao = () => {
    return(
        <div className='navegacao-area'>
            <ul className='navegacao-ul'>
                <li key='teste1' className='navegacao-li'><Link to='/'>HOME</Link></li>
                <li key='teste2' className='navegacao-li'><Link to='/escola'>A ESCOLA</Link></li>
                <li key='teste3' className='navegacao-li'><Link to='/cia'>CIA</Link></li>
                <li key='teste4' className='navegacao-li'><Link to='/cursos'>CURSOS</Link></li>
                <li key='teste5' className='navegacao-li'><Link to='/contato'>CONTATO</Link></li>
                <li key='teste5' className='navegacao-li li-area-privada'><Link to='/contato'>ÁREA PRIVADA</Link></li>
            </ul>

        </div>
    )
}

export default Navegacao