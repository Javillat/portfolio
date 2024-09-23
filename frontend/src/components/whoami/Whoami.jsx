import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from '@mui/icons-material/X';
import TelegramIcon from "@mui/icons-material/Telegram";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";

// import TwitterIcon from '@mui/icons-material/Twitter';

import ContactPageIcon from "@mui/icons-material/ContactPage";
import { orange } from '@mui/material/colors';
import { useTranslation } from "react-i18next";
import profilePicture from "../../assets/img/selfprofile.png";
import portfolioProfile from "../../assets/img/portfolio_profile.PNG";
import Resume from "../resume/Resume";

import "./whoami.css";

export default function Whoami() {
  const orangecolor = orange[500];
  //console.log(orangecolor);

  const { t } = useTranslation();

  return (
    <div className="whoami-superior">
      <div className="whoami_container">
        <header className="header_whoami">
          <p>{t('whoami')}:</p>
        </header>
        <div className="typewriter">
          <h1><span className="imperial-red">{"{"}</span>Javier Villatoro<span className="imperial-red">{"}"}</span></h1>
        </div>
        <div className="fullstack">
          <h2>-<span className="imperial-red">[</span><span className="orange-web">Full-Stack Developer</span><span className="imperial-red">]</span>-</h2>
        </div>
        <div className="profile-main-picture">
          <div className="profile-resume p-4">
            <div className="resume-slighly">
              <div className="moonstone">
                {t('resumeslighlyfirst')}
              </div>
              <div className="moonstone">
                {t('resumeslighlylast')}
              </div>
            </div>
            {/* <p className="moonstone"></p> */}
            {/* <p></p> */}
          </div>
          <div className="profile-picture">
            <img src={profilePicture} alt="" />
          </div>
        </div>
        <div className="whoami_icons">
          <section className="linkedin">
            <a
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/javillatoro-full-stack"
            >
              <LinkedInIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section>
          <section className="github">
            <a
              aria-label="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/Javillat"
            >
              <GitHubIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section>
          <section className="whatsapp">
            <a
              aria-label="WhatsApp Link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+50372146998"
            >
              <WhatsAppIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section>
          <section className="twitter">
            <a
              aria-label="Twitter Profile"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.x.com/Javillatoro_"
            >
              <XIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section>
          {/* <section className="telegram">
            <a
              aria-label="Telegram Link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/Javillatoro"
            >
              <TelegramIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section>
          <section className="number">
            <a
              aria-label="Contact Number"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+50372146998"
            >
              <ContactPhoneIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section>
          <section className="email">
            <a
              aria-label="Email Contact"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:fjvillatoroc@gmail.com"
            >
              <EmailIcon color="warning" fontSize="large" sx={{ "&:hover": { color: "white" } }} />
            </a>
          </section> */}
        </div>
      </div>
      <div className="whoami-resume">
        <Resume />
      </div>
    </div>
  );
}
