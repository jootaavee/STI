import React, { useEffect, useState } from 'react';
import '../css/telas_principais/tela4.css';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import BarraLateral from '../../components/barralateral/barralateral.tsx';
import Detalhe from '../../components/detalhe/detalhe.tsx';
import axios from 'axios';
import { FaTrash } from "react-icons/fa";

interface Chamado {
  aid: number;
  titulo_inicial: string;
  titulo_descricao: string;
  titulo_final: string;
  setor: string | null;
}

const Tela4 = () => {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [deletingAid, setDeletingAid] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const obterCorDoSetor = (setor: string | null) => {
    if (!setor) return '#CCCCCC'; // Cor padrão para setor não informado
    
    const setorLimpo = setor.toString().replace(/[{"}]/g, '').trim();
    
    const coresSetores: Record<string, string> = {
      'PROPEG': '#900000',
      'PROEG': '#900000',
      'PROEX': '#900000',
      'EPILOGO': '#900000',
      'REITORIA': '#900000',
      'FAD': '#900073',
      'FE': '#900073',
      'FASSO': '#900073',
      'FALA': '#900073',
      'FAFIC': '#900073',
      'CAMPUS CAICÓ': '#904300',
      'CAMPUS NATAL': '#904300',
      'CAMPUS PATU': '#904300',
      'CAMPUS ASSU': '#904300',
      'CAMPUS PAU DOS FERROS': '#904300',
      'FAEN': '#126200',
      'FACS': '#126200',
      'FAEF': '#005262',
      'FACEM': '#17009b',
      'FANAT': '#17009b',
    };
    
    return coresSetores[setorLimpo] || 'rgb(36, 44, 105, 0.5)';
  };

  const formatarData = (data: string) => {
    try {
      return new Date(data).toLocaleDateString('pt-BR');
    } catch {
      return data;
    }
  };

  const fetchChamados = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/chamados');
      setChamados(response.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar chamados:', error);
    }
  };

  useEffect(() => {
    fetchChamados();
  }, []);

  const handleDelete = async (aid: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (!window.confirm(`Deseja realmente excluir o chamado ${aid}?`)) {
      return;
    }
    
    try {
      setDeletingAid(aid);
      setError(null);
      
      const response = await axios.delete(`http://localhost:3001/api/chamados/${aid}`);
      
      if (response.data.success) {
        setChamados(prev => prev.filter(c => c.aid !== aid));
      }
    } catch (error) {
      console.error('Erro na exclusão:', error);
      
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || 'Falha ao excluir chamado');
      } else {
        setError('Erro desconhecido ao excluir chamado');
      }
      
      fetchChamados(); // Recarrega os dados
    } finally {
      setDeletingAid(null);
    }
  };

  return (
    <div className='container_tela_4'>
      <BarraLateral />
      <Detalhe />
      <div className='lateral_tela_4'>
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)}>✕</button>
          </div>
        )}
        
        {success && (
          <div className="success-message">
            {success}
            <button onClick={() => setSuccess(null)}>✕</button>
          </div>
        )}
        
        <div className='adicionar_tela_4'>
          <Link to='/tela6'>
            <IoMdAdd style={{ color: 'white', fontSize: '350%' }} />
          </Link>
        </div>
        
        <div className='chamados_tela_4'>
          {chamados.map((chamado) => (
            <Link
              to="/tela5"
              state={{ chamado }}
              key={chamado.aid}
              className="chamado-link"
            >
              <div
                className='descricao_chamados_tela_4'
                style={{ 
                  backgroundColor: obterCorDoSetor(chamado.setor),
                  border: chamado.setor ? 'none' : '1px dashed #999'
                }}
              >
                <div className='ini_titulo'>
                  {formatarData(chamado.titulo_inicial)}
                </div>
                <div className='descrisao_titulo'>
                  {chamado.titulo_descricao}
                </div>
                <div className='fim_titulo'>
                  {formatarData(chamado.titulo_final)}
                </div>
                
                <div className="trash-container">
                  {deletingAid === chamado.aid ? (
                    <div className="spinner">Excluindo...</div>
                  ) : (
                    <FaTrash 
                      className="trash-icon"
                      onClick={(e) => handleDelete(chamado.aid, e)}
                      title={`Excluir chamado ${chamado.aid}`}
                      style={{ color: 'white', fontSize: '150%' }}
                    />
                  )}
                </div>
                
                <div className="chamado-info">
                  <div className="chamado-id">ID: {chamado.aid}</div>
                  <div className="chamado-setor">
                    {chamado.setor || 'Setor não informado'}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tela4;