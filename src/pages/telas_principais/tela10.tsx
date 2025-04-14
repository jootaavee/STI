import React, { useState, useEffect } from 'react';
import '../css/telas_principais/tela10.css';
import BarraLateral from '../../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom'; // Removido useNavigate não utilizado
import { FaCheck } from "react-icons/fa";
import Detalhe from '../../components/detalhe/detalhe.tsx';
// Certifique-se que o caminho para BarChartComponent está correto
import BarChartComponent from '../../components/BarChartComponent.tsx';
import axios from 'axios';
import { IoMdAdd } from "react-icons/io";

interface Profissional {
  idprofissional: number;
  nome: string;
  cargo: string;
  quantidadedechamados: number; // <<< CORRIGIDO: Nome da coluna igual ao backend
}

const Tela10 = () => {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // Removido navigate não utilizado

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Garante que o loading é ativado ao buscar
      setError(''); // Limpa erros anteriores
      try {
        // Busca já ordenada do backend
        const response = await axios.get<Profissional[]>( // Adiciona tipo à resposta do axios
          'http://localhost:3010/api/profissionais?sort=quantidadedechamados&order=desc'
        );
        setProfissionais(response.data);
      } catch (err) {
        setError('Erro ao carregar profissionais. Tente recarregar a página.');
        console.error('Erro ao buscar profissionais:', err);
        setProfissionais([]); // Limpa dados em caso de erro
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Roda apenas na montagem inicial

  // Prepara os dados para o gráfico (Top 10)
  const top10Profissionais = profissionais.slice(0, 10);

  // Prepara os dados para a lista inferior (Top 6 como no código original)
  const top6Profissionais = profissionais.slice(0, 6);

  return (
    <div className='container_tela_10'>
      <BarraLateral />
      <Detalhe />

      <div className='lateral_tela_10'>
        <div className='estagiarios_tela_10'> {/* Renomear esta classe seria bom, ex: lista_profissionais_tela_10 */}
          <div className='head_tela_10'>
            <div className='titulo_tela_10'>
              <h1>VISUALIZAÇÃO DE PROFISSIONAIS</h1>
            </div>
            <div className='edicao_tela_10'>
              <Link to='/tela11' title="Editar Profissionais"> {/* Adiciona tooltip */}
                <IoMdAdd style={{ color: 'white', fontSize: '200%' }} />
              </Link>
            </div>
          </div>

          {/* Exibição de Erro e Loading */}
          {error && <div className="error-message">{error}</div>}
          {loading && <div className="loading-indicator">Carregando profissionais...</div>}

          {/* Lista Principal de Profissionais */}
          {!loading && !error && profissionais.length === 0 && (
            <div className="no-data">Nenhum profissional encontrado.</div>
          )}
          {!loading && profissionais.length > 0 && (
            profissionais.map((prof) => (
              // Usar Link aqui se quiser navegar para detalhes do profissional? Ex: /profissionais/:id
              <div className='nome_estagiarios_tela_10' key={prof.idprofissional}> {/* Renomear esta classe seria bom */}
                <div style={{flex: 1}}>
                  {/* <<< ALTERADO: Nome com contagem entre parênteses */}
                  <h1 className='nome'>{prof.nome} ({prof.quantidadedechamados})</h1>
                  {/* <<< ALTERADO: Apenas o cargo */}
                  <h1 className='funcao'>{prof.cargo}</h1>
                </div>
                {/* Adicionar mais detalhes ou ações aqui se necessário */}
              </div>
            ))
          )}
        </div>

        <div className='chamados_tela_10'>
          {/* Gráfico Top 10 */}
          <div className='chamados_grafico_tela_10'>
            <div className='titulo_grafico_prof_tela_10'>
              TOP 10 PROFISSIONAIS COM MAIS CHAMADOS
            </div>
            <div className='grafico_profissionais_tela_10'>
              {loading && <div className="loading-indicator">Carregando dados do gráfico...</div>}
              {!loading && error && <div className="error-message">Não foi possível carregar dados para o gráfico.</div>}
              {!loading && !error && top10Profissionais.length === 0 && (
                 <div className="no-data">Nenhum dado disponível para o gráfico.</div>
              )}
              {!loading && !error && top10Profissionais.length > 0 && (
                // <<< ALTERADO: Passa apenas os top 10 para o componente
                // Ajuste 'data' se o componente esperar outro nome de prop
                <BarChartComponent data={top10Profissionais} />
                // Se BarChartComponent precisar de {name, value}:
                // <BarChartComponent data={top10Profissionais.map(p => ({ name: p.nome, value: p.quantidadedechamados }))} />
              )}
            </div>
          </div>

          {/* Lista Inferior Resumida (Top 6) */}
          <div className='chamados_estagiarios_tela_10'> {/* Renomear esta classe seria bom, ex: resumo_top_profissionais */}
             {loading && <div className="loading-indicator">Carregando resumo...</div>}
             {!loading && !error && top6Profissionais.length === 0 && (
                 <div className="no-data">Nenhum profissional no resumo.</div>
              )}
            {!loading && !error && top6Profissionais.length > 0 && (
                top6Profissionais.map((prof) => (
                  <div
                    key={prof.idprofissional}
                    className="profissional-card"
                  >
                    {/* <<< ALTERADO: Exibição em linha única (Nome (X chamados)) */}
                    <h1 className='profissional-info'>
                        {prof.nome} ({prof.quantidadedechamados} chamados)
                    </h1>
                    {/* <h1 className='profissional-nome'>{prof.nome}</h1>
                    <h1 className='profissional-chamados'>
                      {prof.quantidadedechamados} chamados
                    </h1> */}
                  </div>
                ))
            )}
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Tela10;