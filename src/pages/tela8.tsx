import React from 'react';
import './css/tela8.css';
import { Link } from 'react-router-dom';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import logo_editar from './imagens_tela_8/logo_editar.png';
import Detalhe from '../components/detalhe/detalhe.tsx';

const tela8 = () => {
    return (<>
        <div className='container_tela_8'>
            <BarraLateral />
            <Detalhe />
            <div className='lateral_tela_8'>
                <div className='descricao_tela_8'>
                    <div className='tiulo_descricao_tela_8'>
                        <div className='editar_tela_8'>
                            <Link to='/tela9'>
                                <img src={logo_editar} className='logo_editar_tela_8' />
                            </Link>
                        </div>
                        <div className='inicio_tela_8'>

                        </div>
                        <div className='titulo_tela_8'>

                        </div>
                        <div className='fim_tela_8'>

                        </div>
                    </div>
                    <div className='itens_descricao_tela_8'>
                        <div className='item_tela_8'>

                        </div>
                        <div className='item_tela_8'>

                        </div>
                        <div className='item_tela_8'>

                        </div>
                        <div className='item_tela_8'>

                        </div>
                        <div className='item_tela_8'>

                        </div>
                        <div className='item_tela_8'>

                        </div>
                        <div className='item_tela_8'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default tela8;