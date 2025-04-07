// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import SideBar from "../components/SideBar";
import useGameFilter from "../hooks/useGameFilter";

const Home = () => {
  const {
    filteredGames,
    filters,
    setFilters,
    allCategories,
    allTags,
  } = useGameFilter();

  return (
    <div className="flex flex-col md:flex-row bg-[#101010] overflow-y-auto no-scrollbar  min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-[250px]  p-4">
        <SideBar
          filters={filters}
          setFilters={setFilters}
          allCategories={allCategories}
          allTags={allTags}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10">
        <HeroSection games={filteredGames} />
      </main>
    </div>
  );
};

export default Home;
