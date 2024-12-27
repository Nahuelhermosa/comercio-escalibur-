"use client";
import { useEffect, useState } from "react";
import "./Pokemon.css"; // Archivo CSS específico para el componente

export default function Pokemon() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const random = getRandomIntInclusive(1, 1000);
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${random}`;
    fetch(endpoint).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setPokemon(data);
          setLoading(false);
        });
      } else {
        console.error("Oops,", res.statusText);
      }
    });
  }, []);

  if (loading) {
    return <h1 className="loading">Cargando Pokémon...</h1>;
  }

  return (
    <div className="pokemon-card">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      {pokemon.sprites && (
        <img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      )}
      <div className="pokemon-stats">
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
      </div>
    </div>
  );
}
