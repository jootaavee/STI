import React from 'react';
import './css/tela10.css';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom';
import Detalhe from '../components/detalhe/detalhe.tsx';
import { FaArrowLeft } from "react-icons/fa"; //icone voltar
import { FaRegEdit } from "react-icons/fa"; //icone editar

const tela10 = () => {
    return (<>
        <div className='container_tela_10'>
            <BarraLateral />
            <Detalhe />
            <div className='lateral_tela_10'>
                <div className='estagiarios_tela_10'>
                    <div className='head_tela_10'>
                        <div className='titulo_tela_10'>
                            <h1>ESTAGIARIOS</h1>
                        </div>
                        <div className='edicao_tela_10'>
                            <Link to='/tela11'>
                                <FaRegEdit style={{ color: 'white', fontSize: '200%' }} />
                            </Link>
                        </div>
                    </div>
                    <div className='nome_estagiarios_tela_10'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                </div>
                <div className='chamados_tela_10'>
                    <div className='chamados_grafico_tela_10'>

                    </div>
                    <div className='chamados_estagiarios_tela_10'>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela10;