
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div
      className={`navbar ${
        isScrolled ? 'bg-gray-800 py-2' : 'py-4'
      } transition duration-300 ease-in-out fixed top-0 w-full 2xl:w-[1340px] h-300 bg-red-color`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Logo</div>
        <div className="text-white text-sm opacity-75">Logo Name</div>
        <div className="space-x-4">
          <button className="text-white text-base hover:underline">Button 1</button>
          <button className="text-white text-base hover:underline">Button 2</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
