import React from 'react';
import './css/tela11.css';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom';

const tela11 = () => {
    return (<>
        <div className='container_tela_11'>
            <BarraLateral />
            <div className='lateral_tela_11'>
                <div className='estagiarios_tela_11'><h1>ESTAGIARIOS</h1>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>João Vitor</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>João Douglas</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Gustavo Medeiros</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Matheus Assunção</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Erico Iago</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Edivan</h1>
                    </div>
                </div>
                <div className='chamados_tela_11'>
                    <div className='chamados_grafico_tela_11'>

                    </div>
                    <div className='chamados_estagiarios_tela_11'>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela11;