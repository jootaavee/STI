import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function GraficoProfissionaisMaisChamados() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Buscar dados da API
    axios.get('http://localhost:3010/api/profissionais/mais-chamados')
      .then(response => {
        if (response.data.success) {
          setDados(response.data.data);
        } else {
          console.error('Erro ao buscar dados dos profissionais.');
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);

  // Preparar dados para o gráfico
  const chartData = {
    labels: dados.map(p => p.nome),
    datasets: [
      {
        label: 'Quantidade de Chamados',
        data: dados.map(p => p.quantidade_chamados),
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 Profissionais com Mais Chamados',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}