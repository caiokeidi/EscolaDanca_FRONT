import React from 'react';
import './Cabecalho.css'


const Cabecalho = () => {
    return (
        <div className='cabecalho-container'>
            <div className='logo-area'>
                <div className='aura-logo'>AURA</div>
                <div className='escola-logo'>estúdio de dança</div>
            </div>
            <div className='provisorio'></div>
        </div>
    );
}

export default Cabecalho;