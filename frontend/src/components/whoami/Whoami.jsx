import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import "./whoami.css";

export default function Whoami() {
  return (
    <div className="whoami_container">
      <header className="header_whoami">
        <p>Who Am I:</p>
      </header>
      <div className="typewriter">
        <h1>Francisco Javier Villatoro</h1>
      </div>
      <div className="fullstack">
        <h2>-[ Full Stack Developer ]-</h2>
      </div>
      <div className="whoami_icons">
        <section className="linkedin">
          <a
            aria-label="LinkedIn Profile"
            target="_blank"
            href="https://www.linkedin.com/in/javillatoro-full-stack"
          >
            <LinkedInIcon color="primary" fontSize="large" />
          </a>
        </section>
        <section className="github">
          <a
            aria-label="Github Profile"
            target="_blank"
            href="https://www.github.com/Javillat"
          >
            <GitHubIcon color="primary" fontSize="large" />
          </a>
        </section>
        <section className="whatsapp">
          <a
            aria-label="WhatsApp Link"
            target="_blank"
            href="https://wa.me/+50372146998"
          >
            <WhatsAppIcon color="primary" fontSize="large" />
          </a>
        </section>
        <section className="telegram">
          <a
            aria-label="Telegram Link"
            target="_blank"
            href="https://t.me/Javillatoro"
          >
            <TelegramIcon color="primary" fontSize="large" />
          </a>
        </section>
        <section className="number">
          <a
            aria-label="Contact Number"
            target="_blank"
            href="tel:+50372146998"
          >
            <ContactPhoneIcon color="primary" fontSize="large" />
          </a>
        </section>
        <section className="email">
          <a
            aria-label="Email Contact"
            target="_blank"
            href="mailto:fjvillatoroc@gmail.com"
          >
            <EmailIcon color="primary" fontSize="large" />
          </a>
        </section>
      </div>
    </div>
  );
}
