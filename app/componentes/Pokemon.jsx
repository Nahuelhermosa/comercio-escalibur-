"use client";
import { useEffect, useState } from "react";

export default function Pokemon () {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState ({});
// los hooks siempre antes del return 
  useEffect(() => {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const random = getRandomIntInclusive(1, 1000);
    const endpoint= `https://pokeapi.co/api/v2/pokemon/${random}`;
    fetch(endpoint)
    .then((res)=> {
      //console.log(res);
      if (res.ok === true) {
        res.json()
         .then((data)=>{
            //console.log(data);
            setPokemon(data);
            setLoading(false);
         })
    } else {
      console.error("Oops,", res.statusText);
    }
    });

  },[]);

  if (loading === true) {
    return (

      <h1>cargando pokemon...</h1>

  )

}
    return (
      <>
    <h1>{pokemon.name}</h1>
    <p>El peso de {pokemon.name} es {pokemon.weight}kg.</p>
    {pokemon.sprites &&
       <img src={pokemon.sprites.front_default} alt=""/>
    }
    </>
  )
}











