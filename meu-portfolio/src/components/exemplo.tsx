// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-black shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">Meu Portfólio</h1>
        <div className="space-x-6 text-lg">
          <a href="#home" className="text-white hover:text-yellow-400">Home</a>
          <a href="#aboutme" className="text-white hover:text-yellow-400">Sobre Mim</a>
          <a href="#project" className="text-white hover:text-yellow-400">Projetos</a>
          <a href="#contact" className="text-white hover:text-yellow-400">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
