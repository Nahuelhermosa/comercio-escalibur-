"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Importamos useSearchParams para leer parámetros de la URL
import Card from "./Card/Card";
import "./CardWrapper.css";
import data from "./data_tarjetas.json";

export default function CardWrapper() {
  const [filtros, setFiltros] = useState("all");
  const searchParams = useSearchParams();
  const categoriaURL = searchParams.get("categoria"); // Obtener el parámetro 'categoria' de la URL

  useEffect(() => {
    if (categoriaURL) {
      setFiltros(categoriaURL);
    }
  }, [categoriaURL]);

  return (
    <div className="wrapper">
      <h2 className="titulowrapper">Indumentaria Consolas y Accesorios</h2>
      <div className="grilla">
        <div className="filtro">
          <label>
            <input
              type="radio"
              name="categoria"
              value="remera"
              checked={filtros === "remera"}
              onChange={() => setFiltros("remera")}
            />{" "}
            remera <br />
          </label>
          <label>
            <input
              type="radio"
              name="categoria"
              value="lombor"
              checked={filtros === "lombor"}
              onChange={() => setFiltros("lombor")}
            />{" "}
            lombor <br />
          </label>
          <label>
            <input
              type="radio"
              name="categoria"
              value="consola"
              checked={filtros === "consola"}
              onChange={() => setFiltros("consola")}
            />{" "}
            consola <br />
          </label>
        </div>

        {data.map((elemento) => {
          if (filtros === "all") {
            return <Card key={elemento.id} producto={elemento} />;
          }
          if (elemento.categoria.toLowerCase() === filtros.toLowerCase()) {
            return <Card key={elemento.id} producto={elemento} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
