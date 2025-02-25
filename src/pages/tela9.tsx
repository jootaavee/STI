import React from 'react';
import './css/tela9.css';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom';
import Detalhe from '../components/detalhe/detalhe.tsx';
import { CgCheck } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io"; //icone adicionar

const tela9 = () => {
    return (<>
        <div className='container_tela_9'>
            <BarraLateral />
            <Detalhe />
            <div className='lateral_tela_9'>
                <div className='descricao_tela_9'>
                    <div className='tiulo_descricao_tela_9'>
                        <div className='inicio_tela_9'>
                            Matéria
                            <div className='edit_tela_9'>
                                <FaRegEdit style={{ color: 'white', fontSize: '130%' }} />
                            </div>
                        </div>
                        <div className='titulo_tela_9'>
                            Unidade
                            <div className='edit_tela_9'>
                                <FaRegEdit style={{ color: 'white', fontSize: '130%' }} />
                            </div>
                        </div>
                        <div className='fim_tela_9'>
                            Preço
                            <div className='edit_tela_9'>
                                <FaRegEdit style={{ color: 'white', fontSize: '130%' }} />
                            </div>
                        </div>
                        <div className='editar_tela_9'>
                            <Link to='/tela8'>
                                <FaCheck style={{ color: 'white', fontSize: '200%' }} />
                            </Link>
                        </div>
                    </div>
                    <div className='linha_tela_9'>

                    </div>
                    <div className='itens_descricao_tela_9'>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='item_tela_9'>
                            <div className='materia'>
                                magnus
                            </div>
                            <div className='unidade'>
                                magnus
                            </div>
                            <div className='preco'>
                                magnus
                            </div>
                        </div>
                        <div className='add_tela_9'>
                            <IoMdAdd style={{color: 'white', fontSize: '300%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela9;