"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos useRouter para manejar la navegación

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
    <form onSubmit={handleFilter}>
      <input
        type="search"
        placeholder="Buscar por categoría..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
