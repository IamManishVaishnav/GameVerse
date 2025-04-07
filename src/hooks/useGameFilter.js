import { useEffect, useState } from "react";
import { gamesData } from "../data/gamesData";

const useGameFilter = () => {
  const [filters, setFilters] = useState({ category: '', tags: [] });
  const [filteredGames, setFilteredGames] = useState(gamesData);

  useEffect(() => {
    let filtered = gamesData;

    if (filters.category) {
      filtered = filtered.filter(game => game.category === filters.category);
    }

    if (filters.tags.length > 0) {
      filtered = filtered.filter(game =>
        filters.tags.every(tag => game.tags.includes(tag))
      );
    }

    setFilteredGames(filtered);
  }, [filters]);

  const allCategories = [...new Set(gamesData.map(game => game.category))];
  const allTags = [...new Set(gamesData.flatMap(game => game.tags))];

  return {
    filters,
    setFilters,
    filteredGames,
    allCategories,
    allTags
  };
};

export default useGameFilter;
