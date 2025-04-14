import React, { useState, useEffect } from 'react';
import "../css/telas_principais/tela1.css";
import Relogio from '../../components/relogio.tsx';
import Data from '../../components/data.tsx';
import BarraLateral from '../../components/barralateral/barralateral.tsx';
import Detalhe from '../../components/detalhe/detalhe.tsx';
import PieChartSetores from '../../components/pizza.tsx';
import BarChartMateriais from '../../components/BarChartMateriais.tsx';

interface SetorData {
  name: string;
  value: number;
}

interface MaterialData {
  name: string;
  usados: number;
}

interface Estatisticas {
  chamadosMes: number;
  chamadosSemana: number;
  distribuicaoSetores: SetorData[];
  materiaisMaisUsados: MaterialData[];
  colunaDataUtilizada?: string;
}

interface ModalConfig {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Tela1 = () => {
  const [estatisticas, setEstatisticas] = useState<Estatisticas>({
    chamadosMes: 0,
    chamadosSemana: 0,
    distribuicaoSetores: [],
    materiaisMaisUsados: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: '',
    message: '',
    onConfirm: () => {},
    onCancel: () => {}
  });

  const coresSetores = ['#4BB9EC', '#FF5DF9', '#FF4D4D', '#54E360', '#FF884D', '#76E2F8'];

  // Função para limpar nomes de setores
  const cleanSetorName = (name: string) => {
    if (!name) return 'Setor desconhecido';
    return name.toString()
      .replace(/^\{+|}+$/g, '')
      .replace(/^"+|"+$/g, '')
      .replace(/^\[+|\]+$/g, '')
      .trim();
  };

  const showConfirmModal = (title: string, message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setModalConfig({
        title,
        message,
        onConfirm: () => {
          setShowModal(false);
          resolve(true);
        },
        onCancel: () => {
          setShowModal(false);
          resolve(false);
        }
      });
      setShowModal(true);
    });
  };

  const fetchEstatisticas = async () => {
    try {
      const [estatisticasRes, materiaisRes] = await Promise.all([
        fetch('http://localhost:3020/api/chamados/estatisticas'),
        fetch('http://localhost:3020/api/materiais/mais-usados')
      ]);

      const estatisticasData = await estatisticasRes.json();
      const materiaisData = await materiaisRes.json();

      if (!estatisticasData.success) {
        if (estatisticasData.error?.includes('Nenhuma coluna de data encontrada')) {
          const userConfirmed = await showConfirmModal(
            'Configuração Necessária',
            'A tabela precisa de uma coluna de data. Deseja criar automaticamente?'
          );
          
          if (userConfirmed) {
            const criacaoRes = await fetch('http://localhost:3020/api/criar-coluna-data', {
              method: 'POST'
            });
            const criacaoData = await criacaoRes.json();
            
            if (criacaoData.success) {
              setError('Coluna criada com sucesso! Recarregando dados...');
              setTimeout(() => {
                setError(null);
                fetchEstatisticas();
              }, 2000);
              return;
            }
          }
        }
        throw new Error(estatisticasData.error || 'Erro ao buscar estatísticas');
      }

      if (!materiaisData.success) {
        throw new Error(materiaisData.error || 'Erro ao buscar materiais');
      }
      
      setEstatisticas({
        chamadosMes: estatisticasData.chamadosMes || 0,
        chamadosSemana: estatisticasData.chamadosSemana || 0,
        distribuicaoSetores: estatisticasData.distribuicaoSetores || [],
        materiaisMaisUsados: materiaisData.data || [],
        colunaDataUtilizada: estatisticasData.coluna_data_utilizada
      });
      
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar estatísticas:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEstatisticas();
    const intervalId = setInterval(fetchEstatisticas, 60000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando dados...</p>
      </div>
    );
  }

  return (
    <div className='container_tela_1'>
      <BarraLateral />
      <Detalhe />

      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h3>{modalConfig.title}</h3>
            <p>{modalConfig.message}</p>
            <div className="modal-actions">
              <button 
                className="modal-button confirm"
                onClick={modalConfig.onConfirm}
              >
                Sim
              </button>
              <button 
                className="modal-button cancel"
                onClick={modalConfig.onCancel}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="error-container">
        
        </div>
      )}

      {!error && (
        <div className='centro_tela_1'>
          <div className='parte_esquerda_tela_1'>
            <div className='superior_esquerda_tela_1'>
              <div className='tabela_QDC'>
                <div className='titulo_QDC'>
                  <h1>Chamados deste mês</h1>
                </div>
                <div className='desc_titulo_QDC'>
                  <span>{estatisticas.chamadosMes}</span>
                </div>
                <div className='titulo_QDCS'>
                  <h1>Chamados desta semana</h1>
                </div>
                <div className='desc_titulo_QDCS'>
                  <span>{estatisticas.chamadosSemana}</span>
                </div>
              </div>
              <div className='tabela_hora'>
                <h1 className='data'><Data /></h1>
                <h1 className='relogio'><Relogio /></h1>
              </div>
            </div>
            <div className='tabela_MAT'>
              <div className='titulo_MAT'>
                <h1>Materiais mais usados</h1>
              </div>
              <div className="grafico_MAT">
                <BarChartMateriais data={estatisticas.materiaisMaisUsados} />
              </div>
            </div>
          </div>

          <div className='parte_direita_tela_1'>
            <div className='grafico_PIZZA'>
              <div className='titulo_pizza_tela_1'>
                CHAMADOS POR SETOR (ÚLTIMOS 30 DIAS)
                {estatisticas.colunaDataUtilizada && (
                  <span className="data-filter-info">
                    [Filtrado por {estatisticas.colunaDataUtilizada}]
                  </span>
                )}
              </div>
              <div className='PIZZA'>
                <PieChartSetores data={estatisticas.distribuicaoSetores} />
              </div>
              <div className='pequenas_estatisticas_tela_1'>
                {estatisticas.distribuicaoSetores.map((setor, index) => (
                  <div key={`${setor.name}-${index}`} className='estatistica'>
                    {cleanSetorName(setor.name)}
                    <div 
                      className='pequeno_detalhe' 
                      style={{ backgroundColor: coresSetores[index % coresSetores.length] }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tela1;