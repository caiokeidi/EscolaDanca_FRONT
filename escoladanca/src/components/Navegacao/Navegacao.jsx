import React from 'react';
import '../Cabecalho.css'

const Navegacao = () => {
    return(
        <div className='navegacao-area'>
            <ul className='navegacao-ul'>
                <li key='teste1' className='navegacao-li'><a href='http://google.com'>HOME</a></li>
                <li key='teste2' className='navegacao-li'><a href='http://google.com'>ESCOLA</a></li>
                <li key='teste3' className='navegacao-li'><a href='http://google.com'>CIA</a></li>
                <li key='teste4' className='navegacao-li'><a href='http://google.com'>ESCOLA</a></li>
                <li key='teste5' className='navegacao-li'><a href='http://google.com'>CONTATO</a></li>
            </ul>
        </div>
    )
}

export default Navegacao