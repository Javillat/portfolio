import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from '@mui/icons-material/X';
import './socialnetworkcontact.css';

const SocialNetworkContact = () => {

    const baseColor = getComputedStyle(document.documentElement).getPropertyValue('--secundary-mint-neon');
    

    return (
        <div className="whoami_icons">
          <div className="linkedin">
            <a
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/javillatoro-full-stack"
            >
              <LinkedInIcon style={{color: baseColor}} fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="github">
            <a
              aria-label="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/Javillat"
            >
              <GitHubIcon style={{color: baseColor}} fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="whatsapp">
            <a
              aria-label="WhatsApp Link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+50372146998"
            >
              <WhatsAppIcon style={{color: baseColor}} fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="twitter">
            <a
              aria-label="Twitter Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.x.com/Javillatoro_"
            >
              <XIcon style={{color: baseColor}} fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
        </div>
    );
}

export default SocialNetworkContact;