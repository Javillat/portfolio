import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from '@mui/icons-material/X';
import TelegramIcon from "@mui/icons-material/Telegram";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { orange } from '@mui/material/colors';
import './socialnetworkcontact.css';

const SocialNetworkContact = () => {
    const orangecolor = orange[500];

    return (
        <div className="whoami_icons">
          <div className="linkedin">
            <a
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/javillatoro-full-stack"
            >
              <LinkedInIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="github">
            <a
              aria-label="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/Javillat"
            >
              <GitHubIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="whatsapp">
            <a
              aria-label="WhatsApp Link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+50372146998"
            >
              <WhatsAppIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="twitter">
            <a
              aria-label="Twitter Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.x.com/Javillatoro_"
            >
              <XIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          {/* <div className="telegram">
            <a
              aria-label="Telegram Link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/Javillatoro"
            >
              <TelegramIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="number">
            <a
              aria-label="Contact Number"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+50372146998"
            >
              <ContactPhoneIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div>
          <div className="email">
            <a
              aria-label="Email Contact"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:fjvillatoroc@gmail.com"
            >
              <EmailIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </div> */}
        </div>
    );
}

export default SocialNetworkContact;