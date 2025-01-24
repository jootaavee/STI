import React from 'react'
import './css/tela4.css'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io"; //icone adicionar
import BarraLateral from '../components/barralateral/barralateral.tsx';
import Detalhe from '../components/detalhe/detalhe.tsx';

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
            <Detalhe />
            <div className='lateral_tela_4'>
                <div className='adicionar_tela_4'>
                    <Link to='/tela6'>
                        <IoMdAdd style={{ color: 'white', fontSize: '350%' }} />
                    </Link>
                </div>
                <div className='chamados_tela_4'>
                    <Link to="/tela5">
                        <div className='descricao_chamados_tela_4'>

                        </div>
                    </Link>
                    <Link to="/tela5">
                        <div className='descricao_chamados_tela_4'>

                        </div>
                    </Link>
                    <Link to="/tela5">
                        <div className='descricao_chamados_tela_4'>

                        </div>
                    </Link>
                    <Link to="/tela5">
                        <div className='descricao_chamados_tela_4'>

                        </div>
                    </Link>
                    <Link to="/tela5">
                        <div className='descricao_chamados_tela_4'>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>)
}

export default Tela4;