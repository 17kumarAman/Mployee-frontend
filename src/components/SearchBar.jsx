import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim() !== "") {
      onSearch(location);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full max-w-4xl space-x-4">
      {/* Search Icon */}
      <div className="text-gray-500">
        <FaSearch size={20} />
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="flex-grow border-none focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 text-base"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Search Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
