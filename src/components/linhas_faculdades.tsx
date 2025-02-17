// LineChartComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Componente do gráfico de linhas
const LineChartComponent = ({ data }) => {
    return (
        <LineChart width={400} height={150} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" style={{ fill: '#FFFFFF' }} /> {/* Cor do texto do eixo X */}
            <YAxis style={{ fill: '#FFFFFF' }} /> {/* Cor do texto do eixo Y */}
            <Tooltip />
            <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="value2" stroke="#82ca9d" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="value3" stroke="#ffc658" activeDot={{ r: 8 }} />
        </LineChart>
    );
};

export default LineChartComponent;