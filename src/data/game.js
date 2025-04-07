import React from 'react';

export const gamesData = [
  {
    id: 1,
    title: "Cyber Horizon",
    coverImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop",
    description: "Explore a vast futuristic open world filled with danger and technology.",
    tags: ["Open World", "RPG", "Sci-Fi"],
    category: "Action RPG",
    rating: 4.8,
    releaseYear: 2023
  },
  {
    id: 2,
    title: "Neon Depths",
    coverImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1765&auto=format&fit=crop",
    description: "Dive into the depths of a neon-lit underwater city teeming with secrets.",
    tags: ["Adventure", "Puzzle", "Atmospheric"],
    category: "Adventure",
    rating: 4.5,
    releaseYear: 2022
  },
  {
    id: 3,
    title: "Astral Champions",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop",
    description: "Compete against players across the galaxy in this fast-paced arena shooter.",
    tags: ["Multiplayer", "FPS", "Competitive"],
    category: "Shooter",
    rating: 4.6,
    releaseYear: 2023
  },
  {
    id: 4,
    title: "Phantom Legacy",
    coverImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1770&auto=format&fit=crop",
    description: "Unravel the mysteries of your ancestral home in this haunting adventure.",
    tags: ["Horror", "Story-Rich", "Single-Player"],
    category: "Horror",
    rating: 4.7,
    releaseYear: 2021
  },
  {
    id: 5,
    title: "Mech Warfare",
    coverImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1374&auto=format&fit=crop",
    description: "Pilot advanced mechs in epic battles across devastated landscapes.",
    tags: ["Strategy", "Sci-Fi", "Tactical"],
    category: "Strategy",
    rating: 4.4,
    releaseYear: 2022
  },
  {
    id: 6,
    title: "Magic Kingdoms",
    coverImage: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=1770&auto=format&fit=crop",
    description: "Build your magical kingdom and defend it against mythical creatures.",
    tags: ["Fantasy", "Building", "Magic"],
    category: "Simulation",
    rating: 4.3,
    releaseYear: 2022
  }
];

const categories = [
  "All Categories",
  "Action RPG",
  "Adventure",
  "Shooter",
  "Horror",
  "Strategy",
  "Simulation",
  "Sports",
  "Racing",
  "Puzzle"
];

const tags = [
  "Open World",
  "RPG",
  "Sci-Fi",
  "Adventure",
  "Puzzle",
  "Atmospheric",
  "Multiplayer",
  "FPS",
  "Competitive",
  "Horror",
  "Story-Rich",
  "Single-Player",
  "Strategy",
  "Tactical",
  "Fantasy",
  "Building",
  "Magic"
];

const releaseYears = [
  "All Years",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019"
];

const popularityOptions = [
  "Most Popular",
  "Highest Rated",
  "Newest First",
  "Oldest First"
];

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
