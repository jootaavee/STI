import React from 'react';
import './css/tela6.css';
import { Link } from 'react-router-dom';
import logo_voltar from './imagens_tela_6/back.png'
import logo_add from './imagens_tela_6/+.png'
import logo_edicao from './imagens_tela_6/logo_editar.png'
import Detalhe from '../components/detalhe/detalhe.tsx';

// const back = require('./imagensCentroT5/back.png')
// const grup = require('./imagensCentroT6/Group 2.png')
// const detalhe = require('./imagensBarralateral/detalhe.png');


const tela6 = () => {
    return (<>
        <div className='container_tela_6'>
            <Detalhe />
            <div className='voltar_tela_6'>
                <Link to='/tela4'>
                    <img src={logo_voltar} className='logo_voltar_tela_6' />
                </Link>
            </div>
            <div className='topo_tela_6'>
                <div className='inicio_tela_6'>
                    <div className='editar_inicio_tela_6'>
                        <img src={logo_edicao} className='logo_edicao_inicio_tela_6' alt='' />
                    </div>
                </div>
                <div className='titulo_tela_6'>
                    <div className='editar_titulo_tela_6'>
                        <img src={logo_edicao} className='logo_edicao_titulo_tela_6' alt='' />
                    </div>
                </div>
                <div className='fim_tela_6'>
                    <div className='editar_fim_tela_6'>
                        <img src={logo_edicao} className='logo_edicao_fim_tela_6' alt='' />
                    </div>
                </div>
            </div>
            <div className='baixo_tela_6'>
                <div className='titulo_descricao_tela_6'>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                    <div className='itens_titulo_tela_6'>

                    </div>
                </div>
                <div className='descricao_tela_6'>

                </div>
                <div className='adicionar_descricao_tela_6'>
                    <img src={logo_add} className='logo_adicao_tela_6' />
                </div>
            </div>
        </div>
    </>)
}

export default tela6;