import "../Styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/support">Support</a>
        <a href="/community">Community</a>
        <a href="/hosting">Hosting</a>
        <a href="/about">About</a>
      </div>
      <div className="footer-social">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">
        © 2024 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;