import React from 'react';
import '../paginas.css';
import './Contato.css'

const Contato = () => {
    return(
        <div className='page-area'>
            <div className='container anim1'>
                <div className='page-title-area'>
                    <h1 className="page-title-h1">Contato</h1>
                </div>
                <div className="page-text-area">
                <p className="page-text-p1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                    doloremque quas aut minima enim officiis illum accusantium
                    repellendus! Est quod necessitatibus quibusdam veritatis architecto
                    nisi earum optio incidunt quaerat. Quo.
                </p>

                
                <form action='' className='page-form'>
                    <div className='page-form-row'>
                        <label to='nome'>Nome: </label>
                        <input type='text' name='nome' className='page-form-field'></input>
                    </div>
                    
                </form>
               

                </div>
                
            </div>
        </div>
    )
}

export default Contato;