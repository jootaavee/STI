import React from 'react';
import './css/tela5.css';
import { Link } from 'react-router-dom';
import logo_edicao from './imagens_tela_5/logo_editar.png'
import logo_voltar from './imagens_tela_5/back.png'

// const back = require('./imagensCentroT5/back.png')
// const grup = require('./imagensCentroT6/Group 2.png')
// const detalhe = require('./imagensBarralateral/detalhe.png');


const tela5 = () => {
    return(<>
        <div className='container_tela_5'>
            <div className='voltar_tela_5'>
                <Link to='/tela4'>
                    <img src={logo_voltar} className='logo_voltar_tela_5'/>
                </Link>
            </div>
            <div className='editar_tela_5'>
                <Link to='/tela7'>
                    <img src={logo_edicao} className='logo_edicao_tela_5'/>
                </Link>
            </div>
            <div className='topo_tela_5'>
                <div className='inicio_tela_5'>

                </div>
                <div className='titulo_tela_5'>

                </div>
                <div className='fim_tela_5'>

                </div>
            </div>
            <div className='baixo_tela_5'>
                <div className='titulo_descricao_tela_5'>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                    <div className='itens_titulo_tela_5'>

                    </div>
                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
                <div className='descricao_tela_5'>

                </div>
            </div>
            {/* <Link to='/tela5'>
                <img src={grup} alt="grupo2" className='grupo2' />
            </Link>
            <Link to='/tela5'>
                <img src={back} alt="back" className='back' />
            </Link> */}
        
        </div>
    </>)
}

export default tela5;