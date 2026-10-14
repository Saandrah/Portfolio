import { Mail} from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  
    return (
    <div className="contact">
      <footer className="footer" id="kontakt">
        <h2>Kontakt</h2>
        <p>Jag är alltid öppen för nya möjligheter och samarbeten. Tveka inte att kontakta mig!</p>
       
<div className="contact-links">
  <a
    href="mailto:sandra.hellstrom93@gmail.com"
    className="contact-link"
  >
    <Mail size={20} />
    <span>E-post</span>
  </a>

  <a
    href="https://www.linkedin.com/in/sandra-hellstrom/"
    className="contact-link"
    target="_blank"
    rel="noreferrer"
  >
 <FaLinkedin size={20} />
    <span>LinkedIn</span>
  </a>

  <a
    href="https://github.com/Saandrah"
    className="contact-link"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub size={20} />
    <span>GitHub</span>
  </a>
</div>

      </footer>
    </div>
  );
}

export default Contact;
