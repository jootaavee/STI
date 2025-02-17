import React from 'react';
import './css/tela8.css';
import { Link } from 'react-router-dom';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import Detalhe from '../components/detalhe/detalhe.tsx';
import { FaRegEdit } from "react-icons/fa";

const tela8 = () => {
    return (<>
        <div className='container_tela_8'>
            <BarraLateral />
            <Detalhe />
            <div className='lateral_tela_8'>
                <div className='descricao_tela_8'>
                    <div className='tiulo_descricao_tela_8'>
                        <div className='inicio_tela_8'>
                            Matéria
                        </div>
                        <div className='titulo_tela_8'>
                            Unidade
                        </div>
                        <div className='fim_tela_8'>
                            Preço
                        </div>
                        <div className='editar_tela_8'>
                            <Link to='/tela9'>
                                <FaRegEdit style={{ color: 'white', fontSize: '200%' }} />
                            </Link>
                        </div>
                    </div>
                    <div className='linha_tela_8'>

                    </div>
                    <div className='itens_descricao_tela_8'>
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                        <div className='item_tela_8'>
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
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela8;