import React from 'react';
import { Link } from 'react-router-dom';
import "./css/tela2.css";
import BarraLateral from '../components/barralateral/barralateral.tsx';
import Relogio from '../components/relogio.tsx';
import Data from '../components/data.tsx';
import Detalhe from '../components/detalhe/detalhe.tsx';

//imagens dos botoes
// const assu = require('./imagensCentroT2/ASSU/normal.png');
// const proex = require('./imagensCentroT2/PROEX/normal.png');
// const epilogo = require('./imagensCentroT2/EPÍLOGO/normal.png');
// const facem = require('./imagensCentroT2/FACEM/normal.png');
// const facs = require('./imagensCentroT2/FACS/normal.png');
// const propeg = require('./imagensCentroT2/PROPEG/normal.png');
// const reitoria = require('./imagensCentroT2/REITORIA/normal.png');
// const fad = require('./imagensCentroT2/FAD/normal.png');
// const fe = require('./imagensCentroT2/FE/normal.png');
// const fasso = require('./imagensCentroT2/FASSO/normal.png');
// const fala = require('./imagensCentroT2/FALA/normal.png');
// const fafic = require('./imagensCentroT2/FAFIC/normal.png');
// const fanat = require('./imagensCentroT2/FANAT/normal.png');

//ajustar o botao do link teste la em baixo para que n fique diferente dos outros :)

const Tela2 = () => {
    return (<>
        <div className='container_tela_2'>
            <BarraLateral />
            <Detalhe />
            <div className='centro_tela_2'>
                <div className='secao_1_tela_2'>
                    <Link to='/propeg' className='link'>
                        <div className='setor_1_tela_2'>
                            <div className='texto_tela_2'>
                                PROPEG
                            </div>
                        </div>
                    </Link>
                    <Link to='/proeg' className='link'>
                        <div className='setor_1_tela_2'>
                            <div className='texto_tela_2'>
                                PROEG
                            </div>
                        </div>
                    </Link>
                    <Link to='/proex' className='link'>
                        <div className='setor_1_tela_2'>
                            <div className='texto_tela_2'>
                                PROEX
                            </div>
                        </div>
                    </Link>
                    <Link to='/epilogo' className='link'>
                        <div className='setor_1_tela_2'>
                            <div className='texto_tela_2'>
                                EPILOGO
                            </div>
                        </div>
                    </Link>
                    <Link to='/reitoria' className='link'>
                        <div className='setor_1_tela_2'>
                            <div className='texto_tela_2'>
                                REITORIA
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='secao_2_tela_2'>
                    <Link to='/fad' className='link'>
                        <div className='setor_2_tela_2'>
                            <div className='texto_tela_2'>
                                FAD
                            </div>
                        </div>
                    </Link>
                    <Link to='/fe' className='link'>
                        <div className='setor_2_tela_2'>
                            <div className='texto_tela_2'>
                                FE
                            </div>
                        </div>
                    </Link>
                    <Link to='/fasso' className='link'>
                        <div className='setor_2_tela_2'>
                            <div className='texto_tela_2'>
                                FASSO
                            </div>
                        </div>
                    </Link>
                    <Link to='/fala' className='link'>
                        <div className='setor_2_tela_2'>
                            <div className='texto_tela_2'>
                                FALA
                            </div>
                        </div>
                    </Link>
                    <Link to='/fafic' className='link'>
                        <div className='setor_2_tela_2'>
                            <div className='texto_tela_2'>
                                FAFIC
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='secao_3_tela_2'>
                    <Link to='/caico' className='link'>
                        <div className='setor_3_tela_2'>
                            <div className='texto_tela_2'>
                                CAICÓ
                            </div>
                        </div>
                    </Link>
                    <Link to='/natal' className='link'>
                        <div className='setor_3_tela_2'>
                            <div className='texto_tela_2'>
                                NATAL
                            </div>
                        </div>
                    </Link>
                    <Link to='/assu' className='link'>
                        <div className='setor_3_tela_2'>
                            <div className='texto_tela_2'>
                                ASSÚ
                            </div>
                        </div>
                    </Link>
                    <Link to='/pdf' className='link'>
                        <div className='setor_3_tela_2'>
                            <div className='texto_tela_2'>
                                P.D.F
                            </div>
                        </div>
                    </Link>
                    <Link to='/patu' className='link'>
                        <div className='setor_3_tela_2'>
                            <div className='texto_tela_2'>
                                PATU
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='secao_4_tela_2'>
                    <Link to='/faen' className='link'>
                        <div className='setor_4_tela_2'>
                            <div className='texto_tela_2'>
                                FAEN
                            </div>
                        </div>
                    </Link>
                    <Link to='/facs' className='link'>
                        <div className='setor_4_tela_2'>
                            <div className='texto_tela_2'>
                                FACS
                            </div>
                        </div>
                    </Link>
                    <Link to='/faef' className='link'>
                        <div className='setor_4_1_tela_2'>
                            <div className='texto_tela_2'>
                                FAEF
                            </div>
                        </div>
                    </Link>
                    <Link to='/facem' className='link'>
                        <div className='setor_4_2_tela_2'>
                            <div className='texto_tela_2'>
                                FACEM
                            </div>
                        </div>
                    </Link>
                    <Link to='/fanat' className='link'>
                        <div className='setor_4_2_tela_2'>
                            <div className='texto_tela_2'>
                                FANAT
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>)
}

export default Tela2;