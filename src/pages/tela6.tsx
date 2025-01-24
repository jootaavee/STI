import React from 'react';
import './css/tela6.css';
import { Link } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io"; //icone adicionar
import { FaRegEdit } from "react-icons/fa"; //icone editar
import { FaArrowLeft } from "react-icons/fa"; //icone voltar
import Detalhe from '../components/detalhe/detalhe.tsx';

// const back = require('./imagensCentroT5/back.png')
// const grup = require('./imagensCentroT6/Group 2.png')
// const detalhe = require('./imagensBarralateral/detalhe.png');


const tela6 = () => {
    return (<>
        <div className='container_tela_6'>
            <Detalhe />
            <div className='topo_tela_6'>
                <div className='voltar_tela_6'>
                    <Link to='/tela4'>
                        <FaArrowLeft style={{ color: 'white', fontSize: '200%' }} />
                    </Link>
                </div>
                <div className='inicio_tela_6'>
                    INI
                    <FaRegEdit style={{ color: 'white', fontSize: '150%' }} />
                </div>
                <div className='titulo_tela_6'>
                    Título
                    <FaRegEdit style={{ color: 'white', fontSize: '150%' }} />
                </div>
                <div className='fim_tela_6'>
                    FIM
                    <FaRegEdit style={{ color: 'white', fontSize: '150%' }} />
                </div>
                <div className='espaco_tela_6'>
                    {/* div usada para centralizar itens */}
                </div>
            </div>
            <div className='baixo_tela_6'>
                <div className='titulo_descricao_tela_6'>
                    <div className='itens_titulo_tela_6'>
                        Diárias
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Posto Mensal
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Valor calculado
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Itens
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Quantidades
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Unidades
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Valor Unitário
                    </div>
                    <div className='itens_titulo_tela_6'>
                        Valor total
                    </div>
                </div>
                <div className='linha_tela_6'>

                </div>
                <div className='adicionar_descricao_tela_6'>
                    <IoMdAdd style={{ color: 'white', fontSize: '350%' }} />
                </div>
            </div>
        </div>
    </>)
}

export default tela6;