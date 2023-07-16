
import React from 'react';

import React useState from 'react';
"use client"
export default function Pokemon2() {
  const [loading, setLoading] = useState(true);

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
