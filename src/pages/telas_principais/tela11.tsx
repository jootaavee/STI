import React, { useState, useEffect, useMemo } from 'react'; // Adicionado useMemo
import '../css/telas_principais/tela11.css';
import BarraLateral from '../../components/barralateral/barralateral.tsx';
import { Link } from 'react-router-dom'; // Removido useNavigate
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Detalhe from '../../components/detalhe/detalhe.tsx';
// Certifique-se que o caminho está correto
import BarChartComponent from '../../components/BarChartComponent.tsx'; // <-- Verifique se o nome do arquivo é barras.tsx ou BarChartComponent.tsx
import axios, { AxiosError } from 'axios'; // Importar AxiosError
import { FaCheck } from "react-icons/fa6";

// Interface corrigida
interface Profissional {
  idprofissional: number;
  nome: string;
  cargo: string;
  quantidadedechamados: number; // <<< CORRIGIDO
}

const Tela11 = () => {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Usar null para facilitar condicionais
  const [addError, setAddError] = useState<string | null>(null); // Erro específico do formulário
  const [deleteError, setDeleteError] = useState<string | null>(null); // Erro específico da exclusão
  const [novoProfissional, setNovoProfissional] = useState({
    nome: '',
    cargo: ''
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  // Removido navigate

  // --- Buscar profissionais ---
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setDeleteError(null); // Limpa erros de exclusão ao recarregar
    try {
      // Busca sem ordenação específica, ou ordene por nome se preferir: ?sort=nome&order=asc
      const response = await axios.get<Profissional[]>('http://localhost:3010/api/profissionais');
      // Garante que quantidadedechamados seja número (caso a API retorne string)
      const dataFormatada = response.data.map(p => ({
        ...p,
        quantidadedechamados: Number(p.quantidadedechamados) || 0
      }));
      setProfissionais(dataFormatada);
    } catch (err) {
      console.error('Erro ao buscar profissionais:', err);
      setError('Erro ao carregar profissionais. Tente recarregar.');
      setProfissionais([]); // Limpa em caso de erro
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- Adicionar profissional ---
  const handleAdicionar = async () => {
    setAddError(null); // Limpa erro anterior do form
    if (!novoProfissional.nome.trim() || !novoProfissional.cargo.trim()) {
      setAddError('Nome e Cargo são obrigatórios.');
      return;
    }

    try {
      const response = await axios.post<Profissional>( // Espera um Profissional como resposta
            'http://localhost:3010/api/profissionais',
             novoProfissional
        );
      // Adiciona o novo profissional (com dados retornados pela API, incluindo ID e contador 0)
      const profissionalAdicionado = {
        ...response.data,
        quantidadedechamados: Number(response.data.quantidadedechamados) || 0
      };
      setProfissionais([...profissionais, profissionalAdicionado]);
      setNovoProfissional({ nome: '', cargo: '' }); // Limpa o formulário
      setMostrarFormulario(false); // Esconde o formulário
    } catch (err) {
        const error = err as AxiosError<{ error?: string; details?: string }>;
        console.error("Erro ao adicionar:", error.response?.data || error.message);
        if (error.response?.status === 409) { // Conflito (profissional já existe)
            setAddError(error.response.data?.error || 'Este profissional já existe.');
        } else {
            setAddError('Erro ao cadastrar o profissional. Tente novamente.');
        }
    }
  };

  // --- Excluir profissional ---
  const handleExcluir = async (id: number) => {
    setDeleteError(null); // Limpa erros de exclusão anteriores
    if (!window.confirm(`Tem certeza que deseja excluir o profissional ID ${id}?`)) return;

    try {
      await axios.delete(`http://localhost:3010/api/profissionais/${id}`);
      setProfissionais(profissionais.filter(p => p.idprofissional !== id)); // Remove da lista
    } catch (err) {
        const error = err as AxiosError<{ error?: string; details?: string }>;
        console.error("Erro ao excluir:", error.response?.data || error.message);
         if (error.response?.status === 404) {
            setDeleteError(`Erro: Profissional ID ${id} não encontrado.`);
            // Opcional: remover da lista mesmo assim se não foi encontrado no backend?
            // setProfissionais(profissionais.filter(p => p.idprofissional !== id));
        } else if (error.response?.status === 409) { // Conflito (em uso?) - se o backend implementar
             setDeleteError(error.response.data?.error || `Não foi possível excluir o profissional ID ${id} (pode estar em uso).`);
        }
        else {
            setDeleteError(`Erro ao excluir o profissional ID ${id}. Tente novamente.`);
        }
    }
  };

  // --- Preparar Dados para Gráfico e Resumo ---
  // useMemo para evitar recálculo desnecessário a cada renderização,
  // só recalcula se 'profissionais' mudar.
  const { top10Profissionais, top6Profissionais } = useMemo(() => {
    const sorted = [...profissionais].sort((a, b) => b.quantidadedechamados - a.quantidadedechamados);
    return {
      top10Profissionais: sorted.slice(0, 10),
      top6Profissionais: sorted.slice(0, 6)
    };
  }, [profissionais]);


  return (
    <div className='container_tela_11'>
      <BarraLateral />
      <Detalhe />

      <div className='lateral_tela_11'>
        {/* Coluna da Esquerda: Cadastro e Lista Principal */}
        <div className='estagiarios_tela_11'> {/* TODO: Renomear classe para algo como 'gerenciamento_profissionais' */}
          <div className='head_tela_11'>
            <div className='titulo_tela_11'>
              <h1>CADASTRO DE PROFISSIONAIS</h1>
            </div>
            <div className='edicao_tela_11'>
              <Link to='/tela10' title="Voltar para Visualização">
                <FaCheck style={{ color: 'white', fontSize: '200%' }} />
              </Link>
            </div>
          </div>

          {/* Botão Adicionar */}
          <div
            className='add_tela_11'
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            title={mostrarFormulario ? "Cancelar Adição" : "Adicionar Novo Profissional"}
            style={{ cursor: 'pointer', marginBottom: '10px', textAlign: 'center' }}
          >
            <IoMdAdd style={{ color: 'white', fontSize: '300%' }} />
          </div>

          {/* Formulário de Adição */}
          {mostrarFormulario && (
            <div className="form-adicionar-profissional" style={{ /* Estilos inline mantidos por exemplo */ padding: '15px', margin: '0 auto 15px auto', width: '80%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <h3 style={{ textAlign: 'center', marginTop: 0 }}>Novo Profissional</h3>
              <input
                type="text" placeholder="Nome Completo"
                value={novoProfissional.nome}
                onChange={(e) => setNovoProfissional({...novoProfissional, nome: e.target.value})}
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="text" placeholder="Cargo"
                value={novoProfissional.cargo}
                onChange={(e) => setNovoProfissional({...novoProfissional, cargo: e.target.value})}
                 style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
               {addError && <div style={{color: '#e74c3c', fontSize: '0.9em', textAlign: 'center'}}>{addError}</div>}
              <button
                onClick={handleAdicionar}
                 style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#27ae60', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Salvar Profissional
              </button>
            </div>
          )}

          {/* Mensagem de Erro Geral/Exclusão */}
          {error && <div className="error-message" style={{ margin: '10px 0' }}>{error}</div>}
          {deleteError && <div className="error-message" style={{ margin: '10px 0', backgroundColor: '#e74c3c' }}>{deleteError}</div>}


          {/* Lista Principal */}
          {loading && <div className="loading-indicator">Carregando profissionais...</div>}
          {!loading && profissionais.length === 0 && !error && (
            <div className="no-data">Nenhum profissional cadastrado. Clique no '+' para adicionar.</div>
          )}
          {!loading && profissionais.length > 0 && (
            profissionais.map((prof) => (
              <div className='nome_estagiarios_tela_11' key={prof.idprofissional}> {/* TODO: Renomear classe */}
                <div style={{flex: 1}}>
                  {/* <<< CORRIGIDO: Exibição Nome (Contagem) */}
                  <h1 className='nome'>{prof.nome} ({prof.quantidadedechamados})</h1>
                   {/* <<< CORRIGIDO: Exibição Cargo */}
                  <h1 className='funcao'>{prof.cargo}</h1>
                </div>
                <FaTrash
                  onClick={() => handleExcluir(prof.idprofissional)}
                  style={{color: '#c0392b', cursor: 'pointer', fontSize: '1.5em', marginLeft: '10px'}}
                  title={`Excluir ${prof.nome}`}
                />
              </div>
            ))
          )}
        </div>

        {/* Coluna da Direita: Gráfico e Resumo */}
        <div className='chamados_tela_11'>
          {/* Gráfico Top 10 */}
          <div className='chamados_grafico_tela_11'>
            <div className='titulo_grafico_prof_tela_10'>TOP 10 PROFISSIONAIS (Chamados)</div> {/* Título como na Tela10 */}
            <div className='grafico_profissionais_tela_10'> {/* Usando mesma classe CSS da Tela10 */}
              {loading && <div className="loading-indicator">Carregando gráfico...</div>}
              {!loading && error && <div className="error-message">Erro ao carregar dados do gráfico.</div>}
              {!loading && !error && top10Profissionais.length === 0 && (
                 <div className="no-data">Nenhum dado para o gráfico.</div>
              )}
              {!loading && !error && top10Profissionais.length > 0 && (
                // <<< CORRIGIDO: Passa top10Profissionais
                <BarChartComponent data={top10Profissionais} />
              )}
            </div>
          </div>

          {/* Resumo Top 6 */}
          <div className='chamados_estagiarios_tela_10'> {/* TODO: Renomear classe */}
             {loading && <div className="loading-indicator">Carregando resumo...</div>}
             {!loading && !error && top6Profissionais.length === 0 && (
                 <div className="no-data">Nenhum profissional no resumo.</div>
              )}
             {!loading && !error && top6Profissionais.length > 0 && (
                top6Profissionais.map((prof) => (
                  <div
                    key={prof.idprofissional}
                    className="profissional-card" // Reutilizando classe da Tela10 se aplicável
                     style={{textAlign: 'center', padding: '5px 0'}} // Estilo simples
                  >
                    {/* <<< CORRIGIDO: Exibição Nome (Contagem Chamados) */}
                    <h1 className='profissional-info' style={{fontSize: '1em', margin: '2px 0'}}>
                      {prof.nome} ({prof.quantidadedechamados} chamados)
                    </h1>
                  </div>
                ))
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela11;