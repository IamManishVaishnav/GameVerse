import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import { fetchPopularGames } from '../utils/api'; // Ensure path is correct

const HeroSection = ({ filters }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
  
      try {
        const { category = '', tags = [] } = filters || {}; // ✅ avoid destructure error
        const data = await fetchPopularGames('', category, tags);
        setGames(data);
      } catch (err) {
        console.error("Failed to load games:", err);
      } finally {
        setLoading(false);
      }
    };
  
    loadGames();
  }, [filters]);
   // Refetch when filters change

  return (
    <section className="py-6 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gaming-accent">
          Discover Games
        </h1>
        <p className="text-white/70 mt-1">
          Explore the latest and greatest games in our collection
        </p>
      </div>

      {loading ? (
        <p className="text-white">Loading games...</p>
      ) : games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p className="text-white/60">No games found for the selected filters.</p>
      )}
    </section>
  );
};

export default HeroSection;
