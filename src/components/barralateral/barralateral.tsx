import React from 'react';
import { Link } from 'react-router-dom';
import './barralateral.css';

//icones do react icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaLandmarkFlag } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";

//imagens barra lateral
const sti = require('../../pages/imagens/imagensBarralateral/sti.png');

const BarraLateral = () => {
    return (<>
        <div className='container_barra_lateral'>
            <div className='barra_lateral'>
                <div className='sti_logo'>
                    <img src={sti} alt="stilogo" className='stilogo' />
                </div>
                <div className='categorias'>
                    <div className='hover'>
                        <div className='dashboard'>
                            <FaHouseChimney style={{ color: 'white', fontSize: '25px', marginRight: '3%', marginLeft: '9%', marginBottom: '1%' }} />
                            <Link to="/" className='link'>
                                <h1 className='titulodeBL'>Dashboard</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='hover'>
                        <div className='setores'>
                            <FaLandmarkFlag style={{ color: 'white', fontSize: '25px', marginRight: '3%', marginLeft: '9%', marginBottom: '2.5%' }} />
                            <Link to='/tela2' className='link'>
                                <h1 className='titulodeBL'>Setores</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='hover'>
                        <div className='chamados'>
                            <MdReportProblem style={{ color: 'white', fontSize: '25px', marginRight: '3%', marginLeft: '9%' }} />
                            <Link to='/tela4' className='link'>
                                <h1 className='titulodeBL'>Chamados</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='hover'>
                        <div className='materiais'>
                            <FaBoxOpen style={{ color: 'white', fontSize: '27px', marginRight: '3%', marginLeft: '9%', marginTop: '2%' }} />
                            <Link to='/tela8' className='link'>
                                <h1 className='titulodeBL'>Materiais</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='hover'>
                        <div className='profissionais'>
                            <IoPeopleSharp style={{ color: 'white', fontSize: '25px', marginRight: '3%', marginLeft: '9%', marginTop: '2%' }} />
                            <Link to='/tela10' className='link'>
                                <h1 className='titulodeBL'>Profissionais</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default BarraLateral;