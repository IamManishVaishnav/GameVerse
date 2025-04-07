import React from 'react';
import { gamesData } from '@/data/gamesData';  // Correct import path to your gamesData file
import GameCard from './GameCard';  // Assuming GameCard is another component that handles individual game display

const GameList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Game List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gamesData.map((game) => (
          <div key={game.id} className="bg-black/50 p-4 rounded-lg backdrop-blur-lg bg-opacity-30">
            <img src={game.coverImage} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-white">{game.title}</h2>
            <p className="text-sm text-white/80 mb-2">{game.description}</p>
            <div className="flex gap-2 flex-wrap">
              {game.tags.map((tag, index) => (
                <span key={index} className="text-xs text-blue-500 bg-blue-200 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-white mt-2">Rating: {game.rating} | Release Year: {game.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
