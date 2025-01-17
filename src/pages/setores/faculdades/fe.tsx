import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/faculdades.css";
import PieChartComponent from '../../../components/pizza.tsx';
// import Relogio from '../../components/relogio.tsx';
// import Data from '../../../components/data.tsx';
import Detalhe from '../../../components/detalhe/detalhe.tsx';

const data = [
    { name: 'sti', value: 400 },
    { name: 'sti', value: 300 },
    { name: 'sti', value: 300 },
    { name: 'sti', value: 200 },
    { name: 'sti', value: 100 },
    { name: 'sti', value: 100 },
];

const fe = () => {
    return (<>
        <div className='container_faculdades'>
            <Detalhe />
            <div className='topo_faculdades'>
                <div className='voltar_faculdades'>

                </div>
                <div className='logo_fe'>

                </div>
            </div>
            <div className='centro_faculdades'>
                <div className='dados_faculdades'>
                    <div className='superior_faculdades'>
                        <div className='esquerda_faculdades'>

                        </div>
                        <div className='direita_faculdades'>

                        </div>
                    </div>
                    <div className='inferior_faculdades'>

                    </div>
                </div>
                <div className='chamados_faculdades'>
                    <PieChartComponent data={data} />
                </div>
            </div>
            {/* <img src={detalhe} alt="datelhelogo" className='detalhelogo' /> */}
        </div>
    </>)
}

export default fe;