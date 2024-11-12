import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-black shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-yellow-400 hover:text-yellow-500 text-2xl font-bold">
            Meu Portfólio
          </a>

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white md:hidden hover:text-yellow-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#home" className="text-white hover:text-yellow-400">
              Home
            </a>
            <a href="#aboutme" className="text-white hover:text-yellow-400">
              Sobre Mim
            </a>
            <a href="#project" className="text-white hover:text-yellow-400">
              Projetos
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400">
              Contato
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <a href="#home" className="hover:text-yellow-400 ">
            Home
          </a>
          <a href="#aboutme" className="hover:text-yellow-400">
            Sobre Mim
          </a>
          <a href="#project" className="hover:text-yellow-400">
            Projetos
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contato
          </a>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
}

export default Navbar;
