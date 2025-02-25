import React from 'react';
import './css/tela11.css';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"; //icone voltar
import { FaRegEdit } from "react-icons/fa"; //icone editar
import { FaCheck } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io"; //icone adicionar
import Detalhe from '../components/detalhe/detalhe.tsx';
import BarChartComponent from '../components/barras.tsx';

const tela11 = () => {
    return (<>
        <div className='container_tela_11'>
            <BarraLateral />
            <Detalhe />
            <div className='lateral_tela_11'>
                <div className='estagiarios_tela_11'>
                    <div className='head_tela_11'>
                        <div className='titulo_tela_11'>
                            <h1>ESTAGIARIOS</h1>
                        </div>
                        <div className='edicao_tela_11'>
                            <Link to='/tela10'>
                                <FaCheck style={{ color: 'white', fontSize: '200%' }} />
                            </Link>
                        </div>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='nome_estagiarios_tela_11'>
                        <h1>Reinaldo Rogger</h1>
                    </div>
                    <div className='add_tela_11'>
                        <IoMdAdd style={{ color: 'white', fontSize: '300%' }} />
                    </div>
                </div>
                <div className='chamados_tela_11'>
                    <div className='chamados_grafico_tela_11'>
                        <div className='titulo_grafico_prof_tela_10'>Chamados feitos por porfissionais</div>
                            <div className='grafico_profissionais_tela_10'>
                                <BarChartComponent />
                            </div>
                        </div>
                        <div className='chamados_estagiarios_tela_10'>
                        <div className='linha_estagiarios_tela_10'>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                        </div>
                        <div className='linha_estagiarios_tela_10'>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                        </div>
                        <div className='linha_estagiarios_tela_10'>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                            <div className='info_estagiario_tela_10'>
                                <h1>jotave</h1>
                                <h1 className='numero'>90</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela11;