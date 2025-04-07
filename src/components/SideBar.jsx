import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory, toggleTag, resetFilters } from '../redux/FilterSlice';
import { toast } from 'react-hot-toast';

const SideBar = ({ allCategories = [], allTags = [] }) => {
  const dispatch = useDispatch();
  const { selectedCategories, selectedTags } = useSelector((state) => state.filters);

  const [localCategories, setLocalCategories] = useState(selectedCategories);
  const [localTags, setLocalTags] = useState(selectedTags);

  const handleCategoryChange = (category) => {
    setLocalCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTagChange = (tag) => {
    setLocalTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleApply = () => {
    // Dispatch all selected filters
    localCategories.forEach((cat) => {
      if (!selectedCategories.includes(cat)) dispatch(toggleCategory(cat));
    });
    selectedCategories.forEach((cat) => {
      if (!localCategories.includes(cat)) dispatch(toggleCategory(cat));
    });

    localTags.forEach((tag) => {
      if (!selectedTags.includes(tag)) dispatch(toggleTag(tag));
    });
    selectedTags.forEach((tag) => {
      if (!localTags.includes(tag)) dispatch(toggleTag(tag));
    });

    toast.success("Filters applied!");
  };

  const handleReset = () => {
    dispatch(resetFilters());
    setLocalCategories([]);
    setLocalTags([]);
    toast.success("Filters Reset!");
  };

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] sm:w-64 bg-white/5 no-scrollbar border-r border-white/10 p-4 text-white overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-sm rounded"
        >
          Reset
        </button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        {allCategories.map((cat) => (
          <label key={cat} className="block mb-1">
            <input
              type="checkbox"
              checked={localCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Tags</h3>
        {allTags.map((tag) => (
          <label key={tag} className="block mb-1">
            <input
              type="checkbox"
              checked={localTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
              className="mr-2"
            />
            {tag}
          </label>
        ))}
      </div>

      {/* ✅ Apply Button */}
      <button
        onClick={handleApply}
        className="w-full py-2 bg-green-600 hover:bg-green-700 rounded mt-4"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default SideBar;
