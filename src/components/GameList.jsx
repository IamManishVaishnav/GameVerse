import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';

const GameList = () => {
  const { selectedCategories, selectedTags } = useSelector((state) => state.filters);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  const categoryParam = selectedCategories.join(',');
  const tagParam = selectedTags.join(',');

  const lastGameRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_RAWG_API_KEY
          }&page=${page}&genres=${categoryParam}&tags=${tagParam}`
        );
        const data = await res.json();

        if (page === 1) {
          setGames(data.results || []);
        } else {
          setGames((prev) => [...prev, ...(data.results || [])]);
        }

        if (!data.next) setHasMore(false);
      } catch (err) {
        console.error('Error fetching games:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page, categoryParam, tagParam]);

  // Reset games when filters change
  useEffect(() => {
    setGames([]);
    setPage(1);
    setHasMore(true);
  }, [categoryParam, tagParam]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Game List</h1>

      {loading && games.length === 0 ? (
        <p className="text-center text-white">Loading...</p>
      ) : games.length === 0 ? (
        <p className="text-center text-white">No games found with selected filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game, index) => {
            const isLast = index === games.length - 1;
            return (
              <div
                ref={isLast ? lastGameRef : null}
                key={game.id}
                className="bg-black/50 p-4 rounded-lg backdrop-blur-lg bg-opacity-30"
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-white">{game.name}</h2>
                <div className="flex gap-2 flex-wrap mb-2">
                  {game.tags?.slice(0, 5).map((tag) => (
                    <span
                      key={tag.id}
                      className="text-xs text-blue-500 bg-blue-200 rounded-full px-3 py-1"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white mt-2">
                  Rating: {game.rating} | Released: {game.released}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {loading && games.length > 0 && (
        <p className="text-center text-white mt-4">Loading more games...</p>
      )}
    </div>
  );
};

export default GameList;
