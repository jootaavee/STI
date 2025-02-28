import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/faculdades.css";
import PieChartComponent from '../../../components/pizza_faculdades.tsx';
import { FaArrowLeft } from "react-icons/fa"; //icone voltar
import Detalhe from '../../../components/detalhe/detalhe.tsx';
import Relogio from '../../../components/relogio.tsx';
import Data from '../../../components/data.tsx'
import LineChartComponent from '../../../components/linhas_faculdades.tsx';
import logo from '../../imagens/imagensFaculdades/Frame 3.png'

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

const fanat = () => {
    return (<>
        <div className='container_faculdades'>
            <Detalhe />
            <div className='topo_faculdades'>
                <div className='voltar_faculdades'>
                    <Link to='/tela2'>
                        <FaArrowLeft className='voltar_tela_fanat' style={{ color: 'white', fontSize: '300%' }} />
                    </Link>
                </div>
                <img src={logo} alt="logo_fanat" className="logo_fanat" />
            </div>
            <div className='centro_faculdades'>
                <div className='dados_faculdades'>
                    <div className='superior_dados_faculdades'>
                        <div className='esquerda_dados_faculdades'>
                            <div className='data_faculdades'>
                                    {<Data />}
                            </div>
                            <div className='relogio_faculdades'>
                                    {<Relogio />}
                            </div>
                        </div>
                        <div className='direita_dados_faculdades'>
                            <div><h1 className='chamados_por_semana'>Chamados por semana</h1></div>
                            <div className='MAT_tela_fanat'>
                                <LineChartComponent data={data2} />
                            </div>
                        </div>
                    </div>
                    <div className='inferior_dados_faculdades'>
                        <Link to="/tela5">
                            <div className='descricao_chamados_tela_faculdades'>
                        
                            </div>
                        </Link>
                        <Link to="/tela5">
                            <div className='descricao_chamados_tela_faculdades'>
                        
                            </div>
                        </Link>
                        <Link to="/tela5">
                            <div className='descricao_chamados_tela_faculdades'>
                        
                            </div>
                        </Link>
                        <Link to="/tela5">
                            <div className='descricao_chamados_tela_faculdades'>
                        
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='chamados_faculdades'>
                    <div className='grafico_pizza_faculdades'>
                        <PieChartComponent data={data} />
                    </div>
                    <div className="dados_chamados_faculdades">
                        <div className='titulo_dados_faculdades'>
                            <h1>chamados por <span>
                                Dia</span>
                            </h1>
                            <h2>
                                x30
                            </h2>
                        </div>

                        <div className='titulo_dados_faculdades'>
                            <h1>chamados por <span>
                                    Semana
                                </span>
                            </h1>
                            <h2>
                                x30
                            </h2>
                        </div>
                        <div className='titulo_dados_faculdades'>
                            <h1>chamados por <span>
                                Mês
                                </span>
                            </h1>
                            <h2>
                                x30
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={detalhe} alt="datelhelogo" className='detalhelogo' /> */}
        </div>
    </>)
}

export default fanat;