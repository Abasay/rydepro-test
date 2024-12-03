import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold">RYDEPRO</div>
      <div className="flex items-center space-x-6">
        <button className="text-sm">Login</button>
        <button className="px-4 py-2 text-sm text-white bg-black rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
