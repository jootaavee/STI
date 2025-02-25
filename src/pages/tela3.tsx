import React from 'react';
import { Link } from 'react-router-dom';
import "./css/tela3.css";
import PieChartComponent from '../components/pizza.tsx';
import Relogio from '../components/relogio.tsx';
import Data from '../components/data.tsx';

//imagens barra lateral
const detalhe = require('./imagensBarralateral/detalhe.png');
const sti = require('./imagensBarralateral/sti.png');
const data = [
    { name: 'sti', value: 400 },
    { name: 'sti', value: 300 },
    { name: 'sti', value: 300 },
    { name: 'sti', value: 200 },
    { name: 'sti', value: 100 },
    { name: 'sti', value: 100 },
];

const tela3 = () => {
    return (<>
        <div className='container_tela_3'>
            <div className='topo_tela_3'>
                <div className='logo_fanat_tela_3'>

                </div>
            </div>
            <div className='centro_tela_3'>
                <div className='dados_tela_3'>
                    <div className='superior_tela_3'>
                        <div className='esquerda_tela_3'>
                        
                        </div>
                        <div className='direita_tela_3'>
                        
                        </div>
                    </div>
                    <div className='inferior_tela_3'>

                    </div>
                </div>
                <div className='chamados_tela_3'>
                    <PieChartComponent data={data} />
                </div>
            </div>
            {/* <img src={detalhe} alt="datelhelogo" className='detalhelogo' /> */}
        </div>
    </>)
}

export default tela3;