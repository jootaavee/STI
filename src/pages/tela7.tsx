import React from 'react';
import './css/tela7.css';
import { Link } from 'react-router-dom';
import logo_confirmar from './imagens/imagens_tela_7/logo_confirmar.png'
import { FaRegEdit } from "react-icons/fa"; //icone editar
import { FaArrowLeft } from "react-icons/fa"; //icone voltar
import { IoMdAdd } from "react-icons/io"; //icone adicionar
import logo_add from './imagens/imagens_tela_7/+.png'
import logo_edicao from './imagens/imagens_tela_7/logo_editar.png'
import Detalhe from '../components/detalhe/detalhe.tsx';
import { FaCheck } from "react-icons/fa6";

// const back = require('./imagensCentroT5/back.png')
// const grup = require('./imagensCentroT6/Group 2.png')
// const detalhe = require('./imagensBarralateral/detalhe.png');


const tela7 = () => {
    return (<>
        <div className='container_tela_7'>
            <Detalhe />
            <div className='topo_tela_7'>
                <div className='inicio_tela_7'>
                    INI 07/07
                    <div className='edit_tela_7'>
                        <FaRegEdit style={{ color: 'white', fontSize: '130%' }} />
                    </div>
                </div>
                <div className='titulo_tela_7'>
                    Concretagem da passarela FASSO-FANAT
                    <div className='edit_tela_7'>
                        <FaRegEdit style={{ color: 'white', fontSize: '130%' }} />
                    </div>
                </div>
                <div className='fim_tela_7'>
                    FIM 07/07
                    <div className='edit_tela_7'>
                        <FaRegEdit style={{ color: 'white', fontSize: '130%' }} />
                    </div>
                </div>
                <div className='editar_tela_7'>
                    <Link to='/tela5'>
                        <FaCheck style={{ color: 'white', fontSize: '250%' }} />
                    </Link>
                </div>
            </div>
            <div className='baixo_tela_7'>
                <div className='titulo_descricao_tela_7'>
                    <div className='itens_titulo_tela_7'>
                        Diárias
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Posto Mensal
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Valor calculado
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Itens
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Quantidades
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Unidades
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Valor Unitário
                    </div>
                    <div className='itens_titulo_tela_7'>
                        Valor total
                    </div>
                </div>
                <div className='linha_tela_7'>

                </div>
                <div className='descricao_tela_7'>
                    <div className='informação_diarias'>
                        info
                    </div>
                    <div className='informação_PM'>
                        info
                    </div>
                    <div className='informação_VC'>
                        info
                    </div>
                    <div className='informação_itens'>
                        info
                    </div>
                    <div className='informação_quantidades'>
                        info
                    </div>
                    <div className='informação_unidades'>
                        info
                    </div>
                    <div className='informação_VU'>
                        info
                    </div>
                    <div className='informação_VT'>
                        info
                    </div>
                </div>
                <div className='botao_check_tela_7'>
                    <IoMdAdd style={{ color: 'white', fontSize: '250%' }} />
                </div>
            </div>
        </div>
    </>)
}

export default tela7;