import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const atualizarData = () => {
      setDataAtual(new Date());
    };

    // Atualiza a data a cada segundo
    const timerId = setInterval(atualizarData, 1000);

    // Limpeza do timer quando o componente for desmontado
    return () => clearInterval(timerId);
  }, []);

  // Formatação da data
  const formatarData = (data) => {
    return data.toLocaleDateString('pt-BR');
  };

  return (
    <div>
      <p>{formatarData(dataAtual)}</p>
    </div>
  );
};

export default Relogio;