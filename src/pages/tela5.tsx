import React from 'react';
import './css/tela5.css';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa"; //icone editar
import { FaArrowLeft } from "react-icons/fa"; //icone voltar
import Detalhe from '../components/detalhe/detalhe.tsx';

// const back = require('./imagensCentroT5/back.png')
// const grup = require('./imagensCentroT6/Group 2.png')
// const detalhe = require('./imagensBarralateral/detalhe.png');


const tela5 = () => {
    return (<>
        <div className='container_tela_5'>
            <Detalhe />
            <div className='topo_tela_5'>
                <div className='voltar_tela_5'>
                    <Link to='/tela4'>
                        <FaArrowLeft style={{ color: 'white', fontSize: '200%' }} />
                    </Link>
                </div>
                <div className='inicio_tela_5'>
                    INI 07/07
                </div>
                <div className='titulo_tela_5'>
                    Concretagem da passarela FASSO-FANAT
                </div>
                <div className='fim_tela_5'>
                    FIM 07/07
                </div>
                <div className='editar_tela_5'>
                    <Link to='/tela7'>
                        <FaRegEdit style={{ color: 'white', fontSize: '200%' }} />
                    </Link>
                </div>
            </div>
            <div className='baixo_tela_5'>
                <div className='titulo_descricao_tela_5'>
                    <div className='itens_titulo_tela_5'>
                        Diárias
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Posto Mensal
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Valor calculado
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Itens
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Quantidades
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Unidades
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Valor Unitário
                    </div>
                    <div className='itens_titulo_tela_5'>
                        Valor total
                    </div>
                </div>
                <div className='linha_tela_5'>

                </div>
                <div className='descricao_tela_5'>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                    <div className='informação'>
                        info
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela5;