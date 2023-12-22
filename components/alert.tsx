import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-light-accent text-light-text text-sm font-bold px-4 py-2 flex items-center">
      <div className="flex-grow text-center">
        <a href={`https://maizehelps.art/`} target="_blank" rel="noopener noreferrer">
          Check out my NFT Toolkit, Maize 🌽
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="bg-transparent text-white"
      >
        ✕
      </button>
    </div>
  );
};

export default Banner;