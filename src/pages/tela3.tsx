import React from 'react';
import { Link } from 'react-router-dom';
import "./css/tela3.css";
import Relogio from '../components/relogio.tsx';
import Data from '../components/data.tsx';

//imagens barra lateral
const detalhe = require('./imagensBarralateral/detalhe.png');
const sti = require('./imagensBarralateral/sti.png');

const tela3 = () => {
    return (<>
        <div className='container_tela_3'>
            <div className='topo'>

            </div>
            <div className='centro3'>
                <div className='esquerda'>
                    <div className='superior'>

                    </div>
                    <div className='inferior'>

                    </div>
                </div>
                <div className='direita'>

                </div>
            </div>
            <img src={detalhe} alt="datelhelogo" className='detalhelogo' />
        </div>
    </>)
}

export default tela3;