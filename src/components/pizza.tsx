import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SetorData {
  name: string;
  value: number;
}

interface PieChartSetoresProps {
  data: SetorData[];
}

const COLORS = ['#4BB9EC', '#FF5DF9', '#FF4D4D', '#54E360', '#FF884D', '#76E2F8'];

const cleanSetorName = (name: string) => {
  if (!name) return 'Setor desconhecido';
  return name.toString()
    .replace(/^\{+|}+$/g, '')
    .replace(/^"+|"+$/g, '')
    .replace(/^\[+|\]+$/g, '')
    .trim();
};

const PieChartSetores: React.FC<PieChartSetoresProps> = ({ data }) => {
  const formattedData = data.map(item => ({
    name: cleanSetorName(item.name),
    value: Number(item.value) || 0
  })).filter(item => item.value > 0);

  if (formattedData.length === 0) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#666',
        fontStyle: 'italic'
      }}>
        Nenhum dado disponível para exibir
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label={false}
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: number, name: string) => [`${value} chamados`, name]}
        />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right"
          formatter={(value) => value}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartSetores;