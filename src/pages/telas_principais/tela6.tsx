import React, { useState } from 'react';
import '../css/telas_principais/tela6.css';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa"; // ícone editar
import { FaArrowLeft } from "react-icons/fa"; // ícone voltar
import Detalhe from '../../components/detalhe/detalhe.tsx';
import { FaCheck } from "react-icons/fa6";

const Tela6 = () => {
    const [tituloInicio, setTituloInicio] = useState('Início'); // Data de início
    const [tituloTela, setTituloTela] = useState('Título'); // Título genérico
    const [tituloFim, setTituloFim] = useState('Fim'); // Data de fim
    const [isEditing, setIsEditing] = useState(null); // Estado para saber qual título está sendo editado
    const [newValue, setNewValue] = useState(''); // Armazena o novo valor durante a edição

    // Estado para os setores selecionados
    const [setoresSelecionados, setSetoresSelecionados] = useState([]);

    // Setores disponíveis
    const setores = ['PROPEG', 'PROEG', 'EPÍLOGO', 'REITORIA', 'PROEX', 'FE', 'FAD', 'FAFIC', 'FASSO', 'FALA'
        , 'FANAT', 'FAEF', 'FACEM', 'FACS', 'FAEN', 'CAMPUS NATAL', 'CAMPUS CAICÓ', 'CAMPUS PATU', 'CAMPUS ASSU', 'CAMPUS PAU DOS FERROS',
    ];

    // Função para editar o título ou data
    const handleEditClick = (tipoTitulo) => {
        setIsEditing(tipoTitulo); // Define qual campo será editado
        setNewValue(tipoTitulo === 'inicio' ? tituloInicio : tipoTitulo === 'fim' ? tituloFim : tituloTela); // Preenche o valor atual
    };

    // Função para atualizar o valor que está sendo digitado
    const handleValueChange = (event) => {
        setNewValue(event.target.value); // Atualiza o valor da entrada (título ou data)
    };

    // Função para salvar as alterações e sair do modo de edição
    const handleSaveClick = () => {
        if (isEditing === 'inicio') {
            setTituloInicio(newValue); // Atualiza a data de início
        } else if (isEditing === 'fim') {
            setTituloFim(newValue); // Atualiza a data de fim
        } else if (isEditing === 'tela') {
            setTituloTela(newValue); // Atualiza o título genérico
        }
        setIsEditing(null); // Sai do modo de edição
    };

    // Função para salvar ao pressionar Enter
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSaveClick(); // Salva ao pressionar Enter
        }
    };

    // Função para enviar os dados ao backend
    const handleCheckClick = async () => {
        console.log({
            tipoTituloInicio: tituloInicio,
            tipoTituloTela: tituloTela,
            tipoTituloFim: tituloFim,
            setoresSelecionados, // Envia os setores selecionados como um array
        });
    
        try {
            const response = await fetch('http://localhost:5000/api/titulos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tipoTituloInicio: tituloInicio,
                    tipoTituloTela: tituloTela,
                    tipoTituloFim: tituloFim,
                    setor: setoresSelecionados, // Aqui você passa o array de setores selecionados
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Títulos e setores registrados com sucesso:', data);
            } else {
                console.error('Erro ao registrar os títulos:', data);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };    

    // Função para alterar os setores selecionados
    const handleSetoresChange = (event) => {
        const { options } = event.target;
        const selectedSetores = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedSetores.push(options[i].value);
            }
        }
        setSetoresSelecionados(selectedSetores);
    };

    return (
        <div className='container_tela_6'>
            <Detalhe />
            <div className='topo_tela_6'>
                <div className='voltar_tela_6'>
                    <Link to='/tela4'>
                        <FaArrowLeft style={{ color: 'white', fontSize: '200%' }} />
                    </Link>
                </div>

                {/* Edição do título de início */}
                <div className='inicio_tela_6'>
                    {isEditing === 'inicio' ? (
                        <div>
                            <input
                                className='tituloinicio'
                                type="date"
                                value={newValue}
                                onChange={handleValueChange} // Atualiza o valor da data
                                onKeyDown={handleKeyDown} // Salva ao pressionar Enter
                            />
                            <button className='salvarBotao' onClick={handleSaveClick}>Salvar</button> {/* Botão Salvar */}
                        </div>
                    ) : (
                        <>
                            {tituloInicio} {/* Exibe o título atual */}
                            <FaRegEdit
                                style={{ color: 'white', fontSize: '130%' }}
                                onClick={() => handleEditClick('inicio')} // Chama a função para editar a data de início
                            />
                        </>
                    )}
                </div>

                {/* Edição do título da tela */}
                <div className='titulo_tela_6'>
                    {isEditing === 'tela' ? (
                        <div>
                            <input
                                className='titulo'
                                type="text"
                                value={newValue}
                                onChange={handleValueChange} // Atualiza o título
                                onKeyDown={handleKeyDown} // Salva ao pressionar Enter
                            />
                            <button className='salvarBotao' onClick={handleSaveClick}>Salvar</button> {/* Botão Salvar */}
                        </div>
                    ) : (
                        <>
                            {tituloTela} {/* Exibe o título atual */}
                            <FaRegEdit
                                style={{ color: 'white', fontSize: '130%' }}
                                onClick={() => handleEditClick('tela')} // Chama a função para editar o título da tela
                            />
                        </>
                    )}
                </div>

                {/* Edição do título de fim */}
                <div className='fim_tela_6'>
                    {isEditing === 'fim' ? (
                        <div>
                            <input
                                className='titulofim'
                                type="date"
                                value={newValue}
                                onChange={handleValueChange} // Atualiza o valor da data
                                onKeyDown={handleKeyDown} // Salva ao pressionar Enter
                            />
                            <button className='salvarBotao' onClick={handleSaveClick}>Salvar</button> {/* Botão Salvar */}
                        </div>
                    ) : (
                        <>
                            {tituloFim} {/* Exibe o título atual */}
                            <FaRegEdit
                                style={{ color: 'white', fontSize: '130%' }}
                                onClick={() => handleEditClick('fim')} // Chama a função para editar a data de fim
                            />
                        </>
                    )}
                </div>

                {/* Botão para enviar os dados ao backend */}
                <div className='check_tela_6'>
                    <Link to='/tela4'>
                        <FaCheck
                            style={{ color: 'white', fontSize: '250%' }}
                            onClick={handleCheckClick} // Envia os títulos ao backend quando o botão de check for clicado
                        />
                    </Link>
                </div>
            </div>
            <div className='baixo_tela_6'>
                <div className='setortitulo'>
                    <h1 className='titulo'>Setor</h1>
                </div>
                <div className='titulosetor' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <form className='formssetores' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '525px' }}>
                        <select
                            multiple
                            value={setoresSelecionados}
                            onChange={handleSetoresChange}
                            size="15"
                            style={{
                                backgroundColor: '#1F2342',
                                width: '100%',
                                maxWidth: '500px',
                                padding: '20px',
                                borderRadius: '4px',
                                fontSize: '20px',
                                color: 'whitesmoke',
                            }}
                        >
                            {setores.map((setor, index) => (
                                <option key={index} value={setor}>
                                    {setor}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Tela6;