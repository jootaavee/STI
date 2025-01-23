import React from 'react';
import './css/tela7.css';
import { Link } from 'react-router-dom';
import logo_confirmar from './imagens_tela_7/logo_confirmar.png'
import logo_add from './imagens_tela_7/+.png'
import logo_edicao from './imagens_tela_7/logo_editar.png'
import Detalhe from '../components/detalhe/detalhe.tsx';

// const back = require('./imagensCentroT5/back.png')
// const grup = require('./imagensCentroT6/Group 2.png')
// const detalhe = require('./imagensBarralateral/detalhe.png');


const tela7 = () => {
    return (<>
        <div className='container_tela_7'>
            <Detalhe />
            <div className='topo_tela_7'>
                <div className='espaco_tela_7'>

                </div>
                <div className='inicio_tela_7'>
                    <div className='editar_inicio_tela_7'>
                        <img src={logo_edicao} className='logo_edicao_inicio_tela_6' alt='' />
                    </div>
                </div>
                <div className='titulo_tela_7'>
                    <div className='editar_titulo_tela_7'>
                        <img src={logo_edicao} className='logo_edicao_titulo_tela_6' alt='' />
                    </div>
                </div>
                <div className='fim_tela_7'>
                    <div className='editar_fim_tela_7'>
                        <img src={logo_edicao} className='logo_edicao_fim_tela_6' alt='' />
                    </div>
                </div>
                <div className='confirmar_tela_7'>
                    <Link to='/tela5'>
                        <img src={logo_confirmar} className='logo_confirmar_tela_7' />
                    </Link>
                </div>
            </div>

            <div className='baixo_tela_7'>
                <div className='titulo_descricao_tela_7'>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                    <div className='itens_titulo_tela_7'>

                    </div>
                </div>
                <div className='descricao_tela_7'>

                </div>
                <div className='botao_adicao_tela7'>
                    <img src={logo_add} className='logo_adicao_tela_7' />
                </div>
            </div>
        </div>
    </>)
}

export default tela7;