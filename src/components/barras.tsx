import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Defina a interface para os dados
interface DataPoint {
  name: string;
  value: number;
}

// Dados de exemplo
const data: DataPoint[] = [
  { name: 'Categoria A', value: 400 },
  { name: 'Categoria B', value: 300 },
  { name: 'Categoria C', value: 200 },
  { name: 'Categoria D', value: 500 },
  { name: 'Categoria E', value: 600 },
];

const BarChartComponent: React.FC = () => {
  return (
    <BarChart
      width={700}
      height={180}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;