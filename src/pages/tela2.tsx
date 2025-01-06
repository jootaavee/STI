import React from 'react';
import { Link } from 'react-router-dom';
import "./css/tela2.css";
import BarraLateral from '../components/barralateral/barralateral.tsx';
import Relogio from '../components/relogio.tsx';
import Data from '../components/data.tsx';

//imagens dos botoes
const assu = require('./imagensCentroT2/ASSU/normal.png');
const proex = require('./imagensCentroT2/PROEX/normal.png');
const epilogo = require('./imagensCentroT2/EPÍLOGO/normal.png');
const facem = require('./imagensCentroT2/FACEM/normal.png');
const facs = require('./imagensCentroT2/FACS/normal.png');
const propeg = require('./imagensCentroT2/PROPEG/normal.png');
const reitoria = require('./imagensCentroT2/REITORIA/normal.png');
const fad = require('./imagensCentroT2/FAD/normal.png');
const fe = require('./imagensCentroT2/FE/normal.png');
const fasso = require('./imagensCentroT2/FASSO/normal.png');
const fala = require('./imagensCentroT2/FALA/normal.png');
const fafic = require('./imagensCentroT2/FAFIC/normal.png');
const fanat = require('./imagensCentroT2/FANAT/normal.png');

//ajustar o botao do link teste la em baixo para que n fique diferente dos outros :)

const Tela2 = () => {
    return (<>
        <div className='container_tela_2'>
            <BarraLateral />
            <div className='centro_tela_2'>
                <div className='secao1'>
                    <div className='botao'>
                        <img src={propeg} alt="propeg" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={proex} alt="proex" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={epilogo} alt="epilogo" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={reitoria} alt="reitoria" className='click' />
                    </div>
                </div>
                <div className='secao2'>
                    <div className='botao'>
                        <img src={fad} alt="propeg" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={fe} alt="proex" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={fasso} alt="epilogo" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={fala} alt="reitoria" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={fafic} alt="reitoria" className='click' />
                    </div>
                </div>
                <div className='secao3'>
                    <div className='botao'>
                        <img src={assu} alt="propeg" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={assu} alt="proex" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={assu} alt="epilogo" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={assu} alt="reitoria" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={assu} alt="reitoria" className='click' />
                    </div>
                </div>
                <div className='secao4'>
                    <div className='botao'>
                        <img src={facem} alt="propeg" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={facs} alt="reitoria" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={facem} alt="proex" className='click' />
                    </div>
                    <div className='botao'>
                        <img src={facs} alt="epilogo" className='click' />
                    </div>
                    <div className='botao'>
                        <Link to='/tela3'>
                            <img src={fanat} alt="reitoria" className='clickteste' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Tela2;