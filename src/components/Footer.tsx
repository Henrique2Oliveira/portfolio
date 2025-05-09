
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline as Mail } from 'react-icons/md';
function Footer() {
  return (
    <footer className="flex flex-col  justify-between items-center gap-y-4 p-6 md:py-12 mx-auto text-white text-sm">
      <div className="text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Henrique. All rights reserved.</p>
      </div>

      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-400 transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:youremail@example.com"
          aria-label="Email"
          className="hover:text-gray-400 transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
