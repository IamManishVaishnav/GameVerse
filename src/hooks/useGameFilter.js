// src/hooks/useGameFilter.js
import { useEffect, useState } from "react";
import { gamesData } from "../data/gamesData";

const useGameFilter = () => {
  // Ensure default state has valid structure
  const [filters, setFilters] = useState({ category: "", tags: [] });
  const [filteredGames, setFilteredGames] = useState(gamesData);

  useEffect(() => {
    let filtered = gamesData;

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((game) => game.category === filters.category);
    }

    // Filter by tags (ensure it's an array first)
    if (Array.isArray(filters.tags) && filters.tags.length > 0) {
      filtered = filtered.filter((game) =>
        filters.tags.every((tag) => game.tags.includes(tag))
      );
    }

    setFilteredGames(filtered);
  }, [filters]);

  // Extract unique categories and tags from game data
  const allCategories = [
    ...new Set(gamesData.map((game) => game.category).filter(Boolean)),
  ];

  const allTags = [
    ...new Set(gamesData.flatMap((game) => game.tags || [])),
  ];

  return {
    filters,
    setFilters,
    filteredGames,
    allCategories,
    allTags,
  };
};

export default useGameFilter;
