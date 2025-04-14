import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MaterialData {
  name: string;
  usados: number;
}

interface BarChartMateriaisProps {
  data: MaterialData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label"><strong>{label}</strong></p>
        <p className="desc">Quantidade usada: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const BarChartMateriais: React.FC<BarChartMateriaisProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="no-data-chart">
        <p>Nenhum dado disponível sobre materiais usados</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          angle={-45} 
          textAnchor="end"
          height={70}
          tick={{ fontSize: 12 }}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar 
          dataKey="usados" 
          name="Materiais mais usados" 
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartMateriais;