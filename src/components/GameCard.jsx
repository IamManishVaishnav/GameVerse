import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  if (!game) return null;

  const {
    id,
    name,
    background_image,
    released,
    rating,
    genres = [],
    tags = [],
  } = game;

  return (
    <Link to={`/game/${id}`} className="group">
      <div
        className="glass-card rounded-xl overflow-hidden h-full flex flex-col border border-blue-600 
        transition duration-300 transform hover:scale-[1.02]
        hover:shadow-[0_0_10px_2px_#1E3A8A]
        hover:border-[#1E3A8A] cursor-pointer"
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={background_image || '/fallback.jpg'} 
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <div className="flex justify-between items-center">
              <span className="text-xs px-3 py-1 bg-white text-black rounded-full shadow-md">
                {genres[0]?.name || 'Action'}
              </span>
              <div className="flex items-center gap-1 bg-black/50 px-2 py-1 text-white rounded-full">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-medium">{rating?.toFixed(1) || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white line-clamp-1">{name}</h3>
            <span className="text-xs text-gaming-accent bg-gaming-accent/10 px-2 py-1 rounded">
              {released?.split('-')[0] || 'TBD'}
            </span>
          </div>

          <p className="text-sm text-white/70 mb-3 flex-grow line-clamp-2">
            {tags.length ? `Top tags: ${tags.slice(0, 2).map(t => t.name).join(', ')}` : 'No tags available.'}
          </p>

          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.slice(0, 4).map((tag) => (
              <span 
                key={tag.id} 
                className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200 cursor-pointer text-white"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
