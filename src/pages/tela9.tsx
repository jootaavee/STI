import React from 'react';
import './css/tela9.css';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom';
import Detalhe from '../components/detalhe/detalhe.tsx';
import logo_correto from './imagens/imagens_tela_10/logo_confirmar.png'

const tela9 = () => {
    return (<>
        <div className='container_tela_9'>
            <BarraLateral />
            <Detalhe />
            <div className='lateral_tela_9'>
                <div className='espaco_tela_9'>
                    {/* div usada para centralizar elementos */}
                </div>
                <div className='descricao_tela_9'>
                    <div className='tiulo_descricao_tela_9'>
                        <div className='inicio_tela_9'>

                        </div>
                        <div className='titulo_tela_9'>

                        </div>
                        <div className='fim_tela_9'>

                        </div>
                    </div>
                    <div className='itens_descricao_tela_9'>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                        <div className='item_tela_9'>

                        </div>
                    </div>
                </div>
                <div className='confirmar_tela_9'>
                    <Link to='/tela8'>
                        <img src={logo_correto} className='logo_correto_tela_9' />
                    </Link>
                </div>
            </div>
        </div>
    </>)
}

export default tela9;