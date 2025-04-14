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

const PieChartSetores: React.FC<PieChartSetoresProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="no-data-chart">
        <p>Nenhum dado disponível sobre distribuição por setores</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name) => [`${value} chamados`, name]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartSetores;