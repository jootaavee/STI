import React from 'react';
import './css/tela9.css';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom';
import Detalhe from '../components/detalhe/detalhe.tsx';
import { CgCheck } from "react-icons/cg";

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
                            Matéria
                        </div>
                        <div className='titulo_tela_9'>
                            Unidade
                        </div>
                        <div className='fim_tela_9'>
                            Preço
                        </div>
                    </div>
                    <div className='linha_tela_9'>

                    </div>
                    <div className='itens_descricao_tela_9'>
                        <div className='item_tela_9'>
                            1
                        </div>
                        <div className='item_tela_9'>
                            2
                        </div>
                        <div className='item_tela_9'>
                            3
                        </div>
                        <div className='item_tela_9'>
                            4
                        </div>
                        <div className='item_tela_9'>
                            5
                        </div>
                        <div className='item_tela_9'>
                            6
                        </div>
                        <div className='item_tela_9'>
                            7
                        </div>
                        <div className='item_tela_9'>

                        </div>
                    </div>
                </div>
                <div className='confirmar_tela_9'>
                    <Link to='/tela8'>
                        <CgCheck style={{ color: 'WhiteSmoke', fontSize: '500%' }} />
                    </Link>
                </div>
            </div>
        </div>
    </>)
}

export default tela9;