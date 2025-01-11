import React from 'react';
import './css/tela6.css';
import { Link } from 'react-router-dom';
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

                </div>
                <div className='inicio_tela_6'>

                </div>
                <div className='titulo_tela_6'>

                </div>
                <div className='fim_tela_6'>

                </div>
                <div className='espaco_tela_6'>
                    {/* div usada para centralizar itens */}
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
                <div className='adicionar_descricao_tela_6'>

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

export default tela6;