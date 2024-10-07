import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <a href="/" className="logo">
            <img 
              src="/logo.png" 
              width={40} 
              height={40} 
              alt="Logo" 
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </a>

          <p className="text-zinc-500 text-sm text-center">
            &copy; 2024 <span className="text-zinc-200">eduardodallabellalima</span>
          </p>

          <div className="flex justify-center space-x-4">
            <a href="https://github.com/EduDalla" target="_blank">
              <FaGithub className="w-6 h-6 rounded-md" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-dallabella-lima-276b1a1b5/" target="_blank">
              <FaLinkedin className="w-6 h-6 rounded-md" alt="LinkedIn" />
            </a>
            <a href="https://react.dev/" target="_blank">
              <FaReact className="w-6 h-6" alt="React" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
