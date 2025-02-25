import React from 'react';
import { Link } from 'react-router-dom';
import "./css/tela1.css";
import Relogio from '../components/relogio.tsx';
import Data from '../components/data.tsx';
import BarraLateral from '../components/barralateral/barralateral.tsx';
import Detalhe from '../components/detalhe/detalhe.tsx';

//graficos
import PieChartComponent from '../components/pizza.tsx';
import LineChartComponent from '../components/linhas.tsx';

const Tela1 = () => {
    //Dados para o gráfico de pizza
    const data = [
        { name: 'sti', value: 400 },
        { name: 'sti', value: 300 },
        { name: 'sti', value: 300 },
        { name: 'sti', value: 200 },
        { name: 'sti', value: 100 },
        { name: 'sti', value: 100 },
    ];

    //Dados para o gráfico de linhas
    const data2 = [
        { name: 'Jan', value1: 400, value2: 300, value3: 200 },
        { name: 'Feb', value1: 500, value2: 400, value3: 300 },
        { name: 'Mar', value1: 600, value2: 200, value3: 500 },
        { name: 'Apr', value1: 278, value2: 390, value3: 300 },
        { name: 'May', value1: 189, value2: 450, value3: 200 },
        { name: 'Jun', value1: 239, value2: 300, value3: 400 },
        { name: 'Jul', value1: 349, value2: 500, value3: 600 },
        { name: 'Aug', value1: 400, value2: 200, value3: 100 },
        { name: 'Sep', value1: 300, value2: 450, value3: 350 },
        { name: 'Oct', value1: 500, value2: 600, value3: 400 },
        { name: 'Nov', value1: 400, value2: 300, value3: 500 },
        { name: 'Dec', value1: 700, value2: 800, value3: 600 },
    ];

    return (<>
        <div className='container_tela_1'>
            <BarraLateral />
            <Detalhe />

            <div className='centro_tela_1'>
                <div className='parte_esquerda_tela_1'>
                    <div className='parte_superior_tela_1'>
                        <div className='tabela_QDC'>
                            <div className='titulo_QDC'><h1>Quantidade de chamados por mês</h1></div>
                        </div>
                        <div className='tabela_hora'>
                            <h1 className='data'>{<Data />}</h1>
                            <h1 className='relogio'>{<Relogio />}</h1>
                        </div>
                    </div>
                    <div className='grafico_MAT'>
                        <div className='MAT'>
                            <LineChartComponent data={data2} />
                        </div>
                    </div>
                </div>

                <div className='parte_direita_tela_1'>
                    <div className='grafico_PIZZA'>
                        <div className='titulo_pizza_tela_1'>
                            CHAMADOS POR SETOR
                        </div>
                        <div className='PIZZA'>
                            <PieChartComponent data={data} />
                        </div>
                        <div className='pequenas_estatisticas_tela_1'>
                            <div className='estatistica'>Exatas
                                <div className='pequeno_detalhe' style={{'backgroundColor': '#4BB9EC'}}>

                                </div>
                            </div>
                            <div className='estatistica'>Humanas
                                <div className='pequeno_detalhe' style={{'backgroundColor': '#FF5DF9'}}>
                    
                                </div>
                            </div>
                            <div className='estatistica'>Reitorias
                                <div className='pequeno_detalhe' style={{'backgroundColor': '#FF4D4D'}}>
                    
                                </div>
                            </div>
                            <div className='estatistica'>Natureza
                                <div className='pequeno_detalhe' style={{'backgroundColor': '#54E360'}}>
                    
                                </div>
                            </div>
                            <div className='estatistica'>Cidades
                                <div className='pequeno_detalhe' style={{'backgroundColor': '#FF884D'}}>
                    
                                </div>
                            </div>
                            <div className='estatistica'>FAEF
                                <div className='pequeno_detalhe' style={{'backgroundColor': '#76E2F8'}}>
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    </>);
}

export default Tela1;