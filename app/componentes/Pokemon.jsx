import React, { useState, useEffect } from 'react';

export default function Pokemon2() {
  const [loading, setLoading] = useState(true);

  // Simulando una llamada a una API con un retraso de 2 segundos
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading === true) {
    return <h1>cargando Pokemon</h1>;
  }

  // Resto del contenido del componente

  return (
    <div>
      {/* Otros elementos JSX */}
    </div>
  );
}













