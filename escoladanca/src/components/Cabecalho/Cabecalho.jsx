import React from 'react';
import '../Cabecalho.css'
import Navegacao from '../Navegacao/Navegacao';


const Cabecalho = () => {
    return (
        <div className='cabecalho-container'>
            <div className='logo-area'>
                <div className='aura-logo'>AURA</div>
                <div className='escola-logo'>estúdio de dança</div>
            </div>
            <Navegacao/>
        </div>
    );
}

export default Cabecalho;