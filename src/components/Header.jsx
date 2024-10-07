import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src="../../logo.png" alt="Logo" />
            <span className="text-xl tracking-tight">Eduardo Dallabella Lima</span>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none flex items-center"
            >
              <svg
                className="w-8 h-8" 
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <ul
            className={`lg:flex lg:ml-14 lg:space-x-12 lg:static absolute w-full left-0 top-full lg:top-0 bg-neutral-900 lg:bg-transparent flex-col lg:flex-row lg:items-center transition-all duration-300 ease-in-out ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li className="w-full text-center py-2 border-b border-neutral-700 lg:border-none">
              <NavLink
                to="/"
                className="block lg:inline-block py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="w-full text-center py-2 border-b border-neutral-700 lg:border-none">
              <NavLink
                to="/sobre"
                className="block lg:inline-block py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </NavLink>
            </li>
            <li className="w-full text-center py-2 border-b border-neutral-700 lg:border-none">
              <NavLink
                to="/projetos"
                className="block lg:inline-block py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </NavLink>
            </li>
            <li className="w-full text-center py-2 lg:border-none">
              <NavLink
                to="/contato"
                className="block lg:inline-block py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
