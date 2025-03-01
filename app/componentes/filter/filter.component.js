"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import "./filter.component.css"; 

export default function Filter() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleFilter = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/Indumentaria?categoria=${search.toLowerCase()}`);
    }
  };

  return (
    <form className="filter-form" onSubmit={handleFilter}>
      <input
        className="filter-input"
        placeholder="Remera, lombor, consolas"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="filter-button" type="submit">Buscar</button>
    </form>
  );
}
