// PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// Define as cores para cada fatia do gráfico
const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

// Componente do gráfico de pizza
const PieChartComponent = ({ data }) => {
    return (
        <div className='grafico_pizza_faculdades'>
            <PieChart width={400} height={300}> class {/* Dimensões do gráfico */}
                <Pie
                    data={data}
                    cx={200} // Centro X ajustado para o novo tamanho
                    cy={130} // Centro Y ajustado para o novo tamanho
                    labelLine={false}
                    label={({ name }) => name} // Exibe o nome na fatia
                    outerRadius={80} // Raio externo ajustado
                    fill="#8884d8"
                    dataKey="value" // Especifica a chave de dados para o valor
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                {/* Removido o componente Legend */}
            </PieChart>
        </div>
    );
};

export default PieChartComponent;