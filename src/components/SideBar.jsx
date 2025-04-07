import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const SideBar = ({ filters, setFilters, allCategories = [], allTags = [] }) => {
  const [tempCategory, setTempCategory] = useState(filters.category);
  const [tempTags, setTempTags] = useState(filters.tags);

  useEffect(() => {
    setTempCategory(filters.category);
    setTempTags(filters.tags);
  }, [filters]);

  const handleTagChange = (tag) => {
    if (tempTags.includes(tag)) {
      setTempTags(tempTags.filter((t) => t !== tag));
    } else {
      setTempTags([...tempTags, tag]);
    }
  };

  const handleApplyFilters = () => {
    if (!tempCategory && tempTags.length === 0) {
      toast.error("Please select a category or tags to apply filter.");
    } else {
      setFilters({ category: tempCategory, tags: tempTags });
      toast.success("Filters Applied!");
    }
  };

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] sm:w-64 bg-white/5 no-scrollbar border-r border-white/10 p-4 text-white overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={handleApplyFilters}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-sm rounded"
        >
          Apply
        </button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        {allCategories.map((cat) => (
          <label key={cat} className="block mb-1">
            <input
              type="radio"
              name="category"
              checked={tempCategory === cat}
              onChange={() => setTempCategory(cat)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
        <label className="block">
          <input
            type="radio"
            name="category"
            checked={tempCategory === ''}
            onChange={() => setTempCategory('')}
            className="mr-2"
          />
          All
        </label>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Tags</h3>
        {allTags.map((tag) => (
          <label key={tag} className="block mb-1">
            <input
              type="checkbox"
              checked={tempTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
              className="mr-2"
            />
            {tag}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
