import React from 'react'
import { Link } from 'react-router-dom'
import './css/tela4.css'
import BarraLateral from '../components/barralateral/barralateral.tsx';

// //imagens dos botoes
// const assu = require('./imagensCentroT2/ASSU/normal.png');
// const proex = require('./imagensCentroT2/PROEX/normal.png');
// const epilogo = require('./imagensCentroT2/EPÍLOGO/normal.png');
// const facem = require('./imagensCentroT2/FACEM/normal.png');
// const facs = require('./imagensCentroT2/FACS/normal.png');
// const propeg = require('./imagensCentroT2/PROPEG/normal.png');
// const reitoria = require('./imagensCentroT2/REITORIA/normal.png');

const Tela4 = () => {
    return (<>
        <div className='container_tela_4'>
            <BarraLateral />
            <div className='lateral_tela_4'>
                <div className='chamados_tela_4'>
                    <div className='descricao_chamados_tela_4'>

                    </div>
                    <div className='descricao_chamados_tela_4'>

                    </div>
                    <div className='descricao_chamados_tela_4'>

                    </div>
                    <div className='descricao_chamados_tela_4'>

                    </div>
                    <div className='descricao_chamados_tela_4'>

                    </div>
                </div>
                <div className='rolagem_tela_4'>
                    <div className='adicionar_tela_4'>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Tela4;