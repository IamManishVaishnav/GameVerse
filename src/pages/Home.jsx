// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import SideBar from "../components/SideBar";
import GameList from "../components/GameList";
import { useSelector } from "react-redux";

// Import game data
import { gamesData } from "../data/gamesData";

const Home = () => {
  const { selectedCategories, selectedTags } = useSelector((state) => state.filters);


  // Filtering logic using "category" instead of "genre"
  const filteredGames = gamesData.filter((game) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(game.genre); // genre = category
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) =>
        game.tags.includes(tag)
      );
    return matchesCategory && matchesTags;
  });
  
  // Derive all categories and tags from data
  const allCategories = [...new Set(gamesData.map((game) => game.category))];
  const allTags = [...new Set(gamesData.flatMap((game) => game.tags))];

  return (
    <div className="flex flex-col md:flex-row bg-[#101010] overflow-y-auto no-scrollbar min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-[250px] p-4">
        <SideBar allCategories={allCategories} allTags={allTags} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10">
        <HeroSection games={filteredGames} />
        <GameList games={filteredGames} />
      </main>
    </div>
  );
};

export default Home;
