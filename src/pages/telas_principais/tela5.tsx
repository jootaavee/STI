import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import '../css/telas_principais/tela5.css';
import Detalhe from '../../components/detalhe/detalhe.tsx';

interface Chamado {
  aid: number;
  titulo_inicial: string;
  titulo_descricao: string;
  titulo_final: string;
  setor: string;
}

interface LinhaInfo {
  id?: number;
  idchamado: number;
  profissionais?: number;
  diarias: number;
  postomensal: number;
  valorcalculado: number;
  itens?: number;
  quantidades: number;
  unidades?: string;
  valorunitario: number;
  valortotal: number;
}

interface Material {
  id: number;
  materia: string;
  unidade: string;
  preco: number;
  usados: number;
}

interface Profissional {
  idprofissional: number;
  nome: string;
  cargo: string;
  quantidadedechamados: number;
}

const Tela5 = () => {
  const location = useLocation();
  const { chamado } = location.state || {};
  const [linhas, setLinhas] = useState<LinhaInfo[]>([]);
  const [materiais, setMateriais] = useState<Material[]>([]);
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState({
    materiais: true,
    profissionais: true,
    linhas: true
  });
  const [error, setError] = useState<string | null>(null);

  const formatarData = (dataISO: string) => {
    if (!dataISO) return "Data inválida";
    try {
      return new Date(dataISO).toLocaleDateString('pt-BR');
    } catch {
      return "Data inválida";
    }
  };

  const formatarNumero = (valor: string | number): number => {
    if (typeof valor === 'number') return valor;
    const num = parseFloat(valor.replace(/[^0-9.,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
  };

  const formatarExibicaoNumero = (valor: number) => {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const carregarDados = async () => {
    try {
      setLoading({ materiais: true, profissionais: true, linhas: true });
      setError(null);
      
      const [materiaisRes, profissionaisRes] = await Promise.all([
        axios.get('http://localhost:3005/api/materiais'),
        axios.get('http://localhost:3010/api/profissionais')
      ]);

      setMateriais(materiaisRes.data);
      setProfissionais(profissionaisRes.data);

      if (chamado?.aid) {
        try {
          const linhasRes = await axios.get(`http://localhost:3002/api/chamados/${chamado.aid}/linhas`);
          setLinhas(linhasRes.data.map((linha: any) => ({
            ...linha,
            diarias: formatarNumero(linha.diarias),
            postomensal: formatarNumero(linha.postomensal),
            valorcalculado: formatarNumero(linha.valorcalculado),
            itens: linha.itens ? formatarNumero(linha.itens) : undefined,
            quantidades: formatarNumero(linha.quantidades),
            valorunitario: formatarNumero(linha.valorunitario),
            valortotal: formatarNumero(linha.valortotal)
          })));
        } catch (err) {
          console.log('Nenhuma linha encontrada para este chamado');
          setLinhas([]);
        }
      }

      setLoading({ materiais: false, profissionais: false, linhas: false });
    } catch (err) {
      console.error('Erro ao carregar dados:', err);
      setError('Erro ao carregar dados. Tente recarregar a página.');
      setLoading({ materiais: false, profissionais: false, linhas: false });
    }
  };

  useEffect(() => {
    if (chamado?.aid) {
      carregarDados();
    }
  }, [chamado?.aid]);

  const handleFieldChange = async (index: number, field: keyof LinhaInfo, value: any) => {
    try {
      const novasLinhas = [...linhas];
      const linhaAtualizada = { ...novasLinhas[index] };

      switch (field) {
        case 'profissionais':
          linhaAtualizada.profissionais = value ? Number(value) : null;
          break;
        case 'itens':
          linhaAtualizada.itens = value ? Number(value) : null;
          if (value) {
            const material = materiais.find(m => m.id === Number(value));
            if (material) {
              linhaAtualizada.unidades = material.unidade;
              linhaAtualizada.valorunitario = material.preco;
              linhaAtualizada.valortotal = linhaAtualizada.quantidades * material.preco;
            }
          }
          break;
        case 'quantidades':
          linhaAtualizada.quantidades = formatarNumero(value);
          if (linhaAtualizada.itens) {
            const material = materiais.find(m => m.id === linhaAtualizada.itens);
            if (material) {
              linhaAtualizada.valortotal = linhaAtualizada.quantidades * material.preco;
            }
          }
          break;
        case 'diarias':
        case 'postomensal':
        case 'valorcalculado':
        case 'valorunitario':
        case 'valortotal':
          linhaAtualizada[field] = formatarNumero(value);
          break;
        default:
          linhaAtualizada[field] = value;
      }

      novasLinhas[index] = linhaAtualizada;
      setLinhas(novasLinhas);

      const dadosParaSalvar = {
        ...linhaAtualizada,
        profissionais: linhaAtualizada.profissionais !== undefined ? linhaAtualizada.profissionais : null,
        itens: linhaAtualizada.itens !== undefined ? linhaAtualizada.itens : null
      };

      const response = linhaAtualizada.id
        ? await axios.put(`http://localhost:3002/api/linhas/${linhaAtualizada.id}`, dadosParaSalvar)
        : await axios.post('http://localhost:3002/api/linhas', dadosParaSalvar);

      novasLinhas[index] = response.data;
      setLinhas(novasLinhas);
    } catch (err) {
      console.error('Erro ao salvar linha:', err);
      setError('Erro ao salvar alterações. Verifique os dados e tente novamente.');
    }
  };

  const handleAdicionarLinha = () => {
    setLinhas([...linhas, {
      idchamado: chamado.aid,
      profissionais: undefined,
      diarias: 0,
      postomensal: 0,
      valorcalculado: 0,
      itens: undefined,
      quantidades: 0,
      unidades: '',
      valorunitario: 0,
      valortotal: 0
    }]);
  };

  const handleExcluirLinha = async (id?: number, index?: number) => {
    if (id === undefined && index === undefined) return;

    try {
      if (id) {
        await axios.delete(`http://localhost:3002/api/linhas/${id}`);
        setLinhas(linhas.filter(l => l.id !== id));
      } else if (index !== undefined) {
        setLinhas(linhas.filter((_, i) => i !== index));
      }
    } catch (err) {
      console.error('Erro ao excluir linha:', err);
      setError('Erro ao excluir linha. Tente novamente.');
    }
  };

  if (!chamado) {
    return (
      <div className="container_tela_5">
        <div className="error-message">Chamado não encontrado.</div>
      </div>
    );
  }

  return (
    <div className='container_tela_5'>
      <Detalhe />
      
      <div className='topo_tela_5'>
        <div className='voltar_tela_5'>
          <Link to='/tela4'>
            <FaArrowLeft style={{ color: 'white', fontSize: '200%' }} />
          </Link>
        </div>
        <div className='inicio_tela_5'>
          INI {formatarData(chamado.titulo_inicial)}
        </div>
        <div className='titulo_tela_5'>
          {chamado.titulo_descricao}
        </div>
        <div className='fim_tela_5'>
          FIM {formatarData(chamado.titulo_final)}
        </div>
      </div>
      
      <div className='baixo_tela_5'>
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)} className="btn-fechar-erro">
              Fechar
            </button>
          </div>
        )}

        {loading.materiais || loading.profissionais || loading.linhas ? (
          <div className="loading-message">Carregando dados...</div>
        ) : (
          <>
            <div className='cabecalho-tabela'>
              <span>Profissionais</span>
              <span>Diárias</span>
              <span>Posto Mensal</span>
              <span>Valor Calculado</span>
              <span>Itens</span>
              <span>Quantidades</span>
              <span>Unidades</span>
              <span>Valor Unitário</span>
              <span>Valor Total</span>
            </div>
            
            <div className='linha-divisoria'></div>
            
            {linhas.length === 0 ? (
              <div className="aviso-sem-dados">

              </div>
            ) : (
              linhas.map((linha, index) => (
                <div className='linha-dados' key={linha.id || index}>
                  <select
                    value={linha.profissionais || ''}
                    onChange={(e) => handleFieldChange(index, 'profissionais', e.target.value)}
                    className='select-profissionais'
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  >
                    <option value="">Selecione...</option>
                    {profissionais.map(prof => (
                      <option key={prof.idprofissional} value={prof.idprofissional}>
                        {prof.nome} ({prof.cargo}) - {prof.quantidadedechamados} chamados
                      </option>
                    ))}
                  </select>
                  
                  <input
                    type="text"
                    value={linha.diarias === 0 ? '' : linha.diarias}
                    onChange={(e) => handleFieldChange(index, 'diarias', e.target.value)}
                    placeholder="0"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <input
                    type="text"
                    value={linha.postomensal === 0 ? '' : linha.postomensal}
                    onChange={(e) => handleFieldChange(index, 'postomensal', e.target.value)}
                    placeholder="0"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <input
                    type="text"
                    value={linha.valorcalculado === 0 ? '' : formatarExibicaoNumero(linha.valorcalculado)}
                    onChange={(e) => handleFieldChange(index, 'valorcalculado', e.target.value)}
                    placeholder="0,00"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <select
                    value={linha.itens || 0}
                    onChange={(e) => handleFieldChange(index, 'itens', e.target.value)}
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  >
                    <option value={0}>Selecione...</option>
                    {materiais.map(mat => (
                      <option key={mat.id} value={mat.id}>
                        {mat.materia} (Usados: {mat.usados})
                      </option>
                    ))}
                  </select>
                  
                  <input
                    type="text"
                    value={linha.quantidades === 0 ? '' : linha.quantidades}
                    onChange={(e) => handleFieldChange(index, 'quantidades', e.target.value)}
                    placeholder="0"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <input
                    type="text"
                    value={linha.unidades || ''}
                    readOnly
                    className="campo-readonly"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <input
                    type="text"
                    value={formatarExibicaoNumero(linha.valorunitario)}
                    readOnly
                    className="campo-readonly"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <input
                    type="text"
                    value={formatarExibicaoNumero(linha.valortotal)}
                    readOnly
                    className="campo-readonly"
                    style={{ width: '8%', padding: '5px', backgroundColor: 'white', borderRadius: '1vw' }}
                  />
                  
                  <div className='container-icone-lixeira'>
                    <FaTrash 
                      className='icone-lixeira' 
                      onClick={() => handleExcluirLinha(linha.id, index)} 
                    />
                  </div>
                </div>
              ))
            )}
            
            <button onClick={handleAdicionarLinha} className='botao-adicionar-linha'>
              + Adicionar Nova Linha
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Tela5;