import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [tempo, setTempo] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTempo(new Date());
    }, 1000);

    // Limpeza do timer quando o componente for desmontado
    return () => clearInterval(timerId);
  }, []);

  // Formatação da hora
  const formatarTempo = (data) => {
    return data.toLocaleTimeString('pt-BR');
  };

  return (
    <div>
      <p>{formatarTempo(tempo)}</p>
    </div>
  );
};

export default Relogio;