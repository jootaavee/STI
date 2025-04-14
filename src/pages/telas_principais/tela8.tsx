import React, { useState, useEffect } from 'react';
import '../css/telas_principais/tela8.css';
import { Link } from 'react-router-dom';
import BarraLateral from '../../components/barralateral/barralateral.tsx';
import Detalhe from '../../components/detalhe/detalhe.tsx';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa'; // Corrigido FaTrash
import { IoMdAdd } from 'react-icons/io';
import axios, { AxiosError } from 'axios'; // Importar Axios e AxiosError

// Interface atualizada para melhor tipo (id e preco)
interface Material {
  id: number; // ID é sempre um número vindo do backend
  materia: string;
  unidade: string;
  preco: number | string; // Backend envia como string (DECIMAL), mas pode ser tratado como número
  usados?: number; // Adicionar se for usar a contagem de 'usados' vinda da API
}

// Interface para o formulário de novo material
interface NovoMaterialForm {
    materia: string;
    unidade: string;
    preco: string; // Manter como string no form para facilitar digitação
}

const Tela8 = () => {
  const [materiais, setMateriais] = useState<Material[]>([]);
  // const [editando, setEditando] = useState<number | null>(null); // Estado 'editando' não está sendo usado, remover se não for implementar edição
  const [novoMaterial, setNovoMaterial] = useState<NovoMaterialForm>({ materia: '', unidade: '', preco: '' });
  const [adicionando, setAdicionando] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Erro geral / fetch
  const [formError, setFormError] = useState<string | null>(null); // Erro do formulário
  const [deleteError, setDeleteError] = useState<string | null>(null); // Erro de exclusão

  useEffect(() => {
    fetchMateriais();
  }, []);

  const fetchMateriais = async () => {
    setLoading(true);
    setError(null);
    setDeleteError(null); // Limpa erros ao recarregar
    try {
      const response = await axios.get<Material[]>('http://localhost:3005/api/materiais');
      // Formatar o preço para número ao receber, se necessário, ou manter como string
      const dataFormatada = response.data.map(m => ({
          ...m,
          preco: Number(m.preco) || 0 // Tenta converter para número, default 0 se falhar
      }));
      setMateriais(dataFormatada);
    } catch (error) {
      console.error('Erro ao buscar materiais:', error);
      setError('Erro ao carregar materiais. Tente recarregar a página.');
      setMateriais([]); // Limpa em caso de erro
    } finally {
        setLoading(false);
    }
  };

  const handleAdicionarMaterial = () => {
    setAdicionando(true);
    setNovoMaterial({ materia: '', unidade: '', preco: '' });
    setFormError(null); // Limpa erro do form ao abrir
  };

  const handleCancelarAdicao = () => {
    setAdicionando(false);
    setFormError(null);
  };

  // Função para formatar exibição do preço
  const formatPrice = (price: string | number): string => {
    const num = Number(String(price).replace(',', '.'));
    if (isNaN(num)) return 'Inválido';
    // Adapte 'BRL' e locale conforme sua necessidade
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const handleSalvarMaterial = async () => {
    setFormError(null); // Limpa erro anterior
    // Validar campos
    if (!novoMaterial.materia.trim() || !novoMaterial.unidade.trim()) {
      setFormError('Matéria e Unidade são obrigatórios!');
      return;
    }
    // Validar preço (simples validação se é número)
    const precoNum = Number(String(novoMaterial.preco).replace(',', '.'));
    if (isNaN(precoNum) || precoNum < 0) {
       setFormError('Preço inválido. Use números e opcionalmente "." ou "," como decimal.');
       return;
    }

    const materialParaEnviar = {
        materia: novoMaterial.materia.trim(),
        unidade: novoMaterial.unidade.trim(),
        preco: precoNum // Envia como número para o backend
    }

    try {
      // Usando axios para consistência
      const response = await axios.post<Material>( // Espera um Material como resposta
        'http://localhost:3005/api/materiais',
         materialParaEnviar
      );

      // Adiciona o material salvo (com ID e dados do backend) à lista
      const materialSalvo = {
          ...response.data,
          preco: Number(response.data.preco) || 0 // Garante que é número
      };
      setMateriais([...materiais, materialSalvo]);
      setAdicionando(false); // Fecha o formulário

    } catch (err) {
        const error = err as AxiosError<{ error?: string; details?: string }>;
        console.error('Erro ao salvar material:', error.response?.data || error.message);
        if (error.response?.status === 409) { // Conflito (material já existe)
            setFormError(error.response.data?.error || 'Este material já existe.');
        } else {
             setFormError('Erro ao salvar material. Tente novamente.');
        }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, campo: keyof NovoMaterialForm) => {
    setNovoMaterial({
      ...novoMaterial,
      [campo]: e.target.value
    });
  };

  // --- FUNÇÃO PARA EXCLUIR MATERIAL ---
  const handleExcluirMaterial = async (id: number | undefined) => {
      if (id === undefined) {
           console.error("Tentativa de excluir material sem ID válido.");
           setDeleteError("Não é possível excluir: ID do material inválido.");
           return;
      }

      if (!window.confirm(`Tem certeza que deseja excluir o material ID ${id}? Esta ação não pode ser desfeita.`)) {
          return; // Usuário cancelou
      }

      setError(null); // Limpa erros gerais
      setDeleteError(null); // Limpa erro de exclusão anterior

      try {
          await axios.delete(`http://localhost:3005/api/materiais/${id}`);
          // Remove o material do estado local após sucesso
          setMateriais(prevMateriais => prevMateriais.filter(m => m.id !== id));
          console.log(`Material ID ${id} excluído com sucesso.`);
      } catch (err) {
          const error = err as AxiosError<{ error?: string; details?: string }>;
          console.error(`Erro ao excluir material ID ${id}:`, error.response?.data || error.message);
          if (error.response?.status === 404) {
              setDeleteError(`Erro: Material ID ${id} não encontrado no servidor.`);
              // Opcional: remover da lista local mesmo se não encontrado no backend?
              // setMateriais(prevMateriais => prevMateriais.filter(m => m.id !== id));
          } else if (error.response?.status === 409) { // Conflito (FK violation / em uso)
              setDeleteError(error.response.data?.error || `Não foi possível excluir o material ID ${id} (pode estar em uso em algum chamado).`);
          } else {
              setDeleteError(`Erro ao excluir material ID ${id}. Tente novamente mais tarde.`);
          }
      }
  }

  return (
    <div className='container_tela_8'>
      <BarraLateral />
      <Detalhe />
      <div className='lateral_tela_8'>
        <div className='descricao_tela_8'>
          {/* Cabeçalho */}
          <div className='tiulo_descricao_tela_8'>
            <div className='inicio_tela_8'>Matéria</div>
            <div className='titulo_tela_8'>Unidade</div>
            <div className='fim_tela_8'>Preço</div>
            <div className='editar_tela_8'> {/* Coluna para ações */}
              <button
                onClick={handleAdicionarMaterial}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                title="Adicionar Novo Material"
              >
                <IoMdAdd style={{ color: 'white', fontSize: '250%', verticalAlign: 'middle' }} />
              </button>
            </div>
          </div>
          <div className='linha_tela_8'></div>

          {/* Mensagens de Erro */}
          {error && <div className="error-message" style={{ margin: '10px', padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>{error}</div>}
          {deleteError && <div className="error-message" style={{ margin: '10px', padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>{deleteError}</div>}


          {/* Lista de Materiais */}
          <div className='itens_descricao_tela_8'>
            {loading && <div style={{ padding: '20px', textAlign: 'center' }}>Carregando materiais...</div>}
            {!loading && materiais.length === 0 && !error && (
                 <div style={{ padding: '20px', textAlign: 'center' }}>Nenhum material cadastrado.</div>
            )}
            {!loading && materiais.map((material) => (
              <div className='item_tela_8' key={material.id}>
                <div className='materia'>
                  {material.materia}
                  {/* Exibir contagem de 'usados' se desejar: */}
                  {/* {material.usados !== undefined && <span style={{fontSize: '0.8em', marginLeft: '5px', opacity: 0.7}}>({material.usados}x)</span>} */}
                </div>
                <div className='unidade'>
                  {material.unidade}
                </div>
                <div className='preco'>
                  {formatPrice(material.preco)} {/* Formata o preço */}
                </div>
                {/* --- Botão Excluir --- */}
                <div className='trash'>
                  <FaTrash
                    style={{ color: 'white', fontSize: '100%', cursor: 'pointer' }} // Ajuste tamanho e cursor
                    onClick={() => handleExcluirMaterial(material.id)} // Chama o handler
                    title={`Excluir ${material.materia}`} // Tooltip
                  />
                </div>
              </div>
            ))}

            {/* Formulário de Adição */}
            {adicionando && (
              <div className='item_tela_8 item-adicionar' style={{ backgroundColor: '#e9ecef', borderTop: '2px solid #ccc' }}>
                <div className='materia'>
                  <input
                    type="text" value={novoMaterial.materia}
                    onChange={(e) => handleInputChange(e, 'materia')}
                    placeholder="Nome do Material"
                    style={{ width: '95%', padding: '5px' }} autoFocus/> {/* Foco automático */}
                </div>
                <div className='unidade'>
                  <input
                    type="text" value={novoMaterial.unidade}
                    onChange={(e) => handleInputChange(e, 'unidade')}
                    placeholder="Ex: kg, m², un"
                    style={{ width: '90%', padding: '5px' }} />
                </div>
                <div className='preco'>
                  <input
                    type="text" value={novoMaterial.preco}
                    onChange={(e) => handleInputChange(e, 'preco')}
                    placeholder="0,00" // Exemplo
                    inputMode='decimal' // Ajuda teclado móvel
                    style={{ width: '90%', padding: '5px' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingRight: '10px' }}>
                    {formError && <div style={{ color: 'red', fontSize: '0.8em', flexGrow: 1, textAlign: 'right' }}>{formError}</div>}
                  <button onClick={handleSalvarMaterial} style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Salvar">
                    <FaCheck style={{ color: 'green', fontSize: '150%' }} />
                  </button>
                  <button onClick={handleCancelarAdicao} style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Cancelar">
                    <FaTimes style={{ color: 'red', fontSize: '150%' }} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela8;