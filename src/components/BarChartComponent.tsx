import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Interface correta (combinando com backend e Tela10)
interface Profissional {
  idprofissional: number;
  nome: string;
  cargo: string;
  quantidadedechamados: number; // <<< CORRIGIDO: Nome da propriedade
}

// Props esperadas pelo componente
interface BarChartProps {
  data: Profissional[]; // Espera receber já os dados filtrados (Top 10)
}

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {

  // Transforma os dados recebidos (Top 10) para o formato específico do gráfico
  // Removido .sort() e .slice() - devem ser feitos no componente pai (Tela10)
  const chartData = data.map(prof => ({
      name: prof.nome.length > 15 ? prof.nome.substring(0, 15) + '...' : prof.nome, // Rótulo do eixo X (nome curto)
      fullName: prof.nome, // Nome completo para tooltip
      // <<< CORRIGIDO: Usar o nome correto da propriedade para o valor da barra
      chamados: prof.quantidadedechamados,
      cargo: prof.cargo // Para tooltip
    }));

    // Verifica se há dados válidos para renderizar
    const hasValidData = chartData.some(item => typeof item.chamados === 'number' && !isNaN(item.chamados));

    if (!hasValidData && data.length > 0) {
      console.warn("BarChartComponent: Dados recebidos, mas a propriedade 'quantidadedechamados' parece estar ausente ou inválida nos objetos.", data);
      return <div style={{color: 'orange', padding: '20px'}}>Dados do gráfico inválidos. Verifique a propriedade 'quantidadedechamados'.</div>;
    }
    if (chartData.length === 0) {
        return <div style={{ padding: '20px' }}>Nenhum dado para exibir no gráfico.</div>; // Mensagem se não houver dados
    }


  return (
    // Garante que o container pai tenha altura definida no CSS (.grafico_profissionais_tela_10)
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 80, // Aumentar bottom margin para caber rótulos inclinados
        }}
        barCategoryGap="20%" // Espaçamento entre categorias (grupos de barras, se houvesse)
        barGap={4} // Espaçamento entre barras dentro da mesma categoria (não aplicável aqui)
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false}/> {/* Grid horizontal apenas */}
        <XAxis
          dataKey="name" // Usa o nome curto como rótulo
          angle={-45}    // Inclina o rótulo
          textAnchor="end" // Alinha texto inclinado
          interval={0}   // Mostra todos os rótulos
          tick={{ fontSize: 10, fill: '#666' }} // Estilo do rótulo
          // height={70} // Ajuste a altura se necessário, mas bottom margin pode ser suficiente
        />
        <YAxis
          allowDecimals={false} // Não mostrar decimais para número de chamados
          tick={{ fontSize: 12, fill: '#666' }}
          label={{
            value: 'Nº de Chamados',
            angle: -90,
            position: 'insideLeft',
            fontSize: 14,
            fill: '#333',
            dy: -10 // Ajuste fino da posição do label Y
          }}
        />
        <Tooltip
           cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }} // Efeito ao passar o mouse
           // Formata o conteúdo do Tooltip
           content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload; // Acessa os dados completos do item (name, fullName, chamados, cargo)
              return (
                <div className="custom-tooltip" style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', borderRadius: '4px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
                  <p style={{ fontWeight: 'bold', margin: 0 }}>{data.fullName}</p>
                  <p style={{ margin: '5px 0' }}>{`Cargo: ${data.cargo}`}</p>
                  <p style={{ margin: '5px 0', color: '#4BB9EC' }}>{`Chamados: ${data.chamados}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        {/* <Legend
          // Pode remover a legenda se só há uma barra e o título do gráfico/eixo Y são claros
          // verticalAlign="top"
          // wrapperStyle={{ lineHeight: '40px' }}
        /> */}
        <Bar
          dataKey="chamados" // <<< Certifique-se que 'chamados' no chartData tem valor numérico
          name="Quantidade de Chamados" // Usado no Tooltip padrão e Legenda
          fill="#4BB9EC" // Cor da barra
          // barSize={30} // Pode deixar recharts decidir ou definir um tamanho
          radius={[4, 4, 0, 0]} // Bordas arredondadas no topo
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;