import React from "react";
import { useTranslation } from "react-i18next";
import profilePicture from "../../assets/img/profile.PNG";
import window_code from "../../assets/img/window_code.png";
import { BsChevronRight, BsDashLg } from "react-icons/bs";
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss, FaJs, Fa } from "react-icons/fa";
import Resume from "../resume/Resume";

import "./whoami.css";

export default function Whoami() {


  const { t } = useTranslation();

  return (
    <div className="whoami-superior">
      <div className="whoami-container">
        <div className="whoami-item profile-picture">
          <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stopColor="rgba(43, 158, 179, 1)" offset="0%"></stop>
              <stop id="stop2" stopColor="rgba(15, 76, 117, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
            <path fill="url(#sw-gradient)" d="M18.7,-20.1C24.2,-13.3,28.4,-6.6,29.3,0.9C30.2,8.5,27.8,16.9,22.4,20.4C16.9,24,8.5,22.6,0.1,22.4C-8.2,22.3,-16.4,23.5,-22,20C-27.7,16.4,-30.6,8.2,-30.7,-0.1C-30.8,-8.4,-28,-16.8,-22.4,-23.6C-16.8,-30.4,-8.4,-35.6,-0.9,-34.7C6.6,-33.8,13.3,-26.9,18.7,-20.1Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "0.3s" }} stroke="url(#sw-gradient)">
            </path>
          </svg>
          <img src={profilePicture} alt="javier-pic" className="profile-picture-img" />
        </div>
        <div className="whoami-item whoami-text">
          <div className="whoami-quihubole"><span className="imperial-red"><BsChevronRight /></span>Bienvenido a mi mundo!</div>
          <div className="whoami-main-text-title">
            <h1 className="mt-2 pt-4">
              <span className="white">Quiubo...</span>
            </h1>
          </div>
          <div className="whoami-main-text-title">
            <h1 className="pt-3">
              <span className="white">Soy </span><span className="color-shift">Javier Villatoro</span>
            </h1>
          </div>
          <div className="profile-resume flex flex-column p-4 pb-2">
            <div className="fullstack">
              <h2><span className="imperial-red pl-2">[</span><span> Full-Stack Developer </span><span className="imperial-red pr-2">]</span></h2>
            </div>
            <div className="resume-slighly color-shift pt-3 mt-2 px-4">
              <span className="imperial-red"><BsChevronRight /></span> {t("resumeslighlyfirst")}
            </div>
            <div className="resume-slighly color-shift-reverse pb-3 px-4">
              <span className="imperial-red"><BsChevronRight /></span> {t("resumeslighlylast")}
            </div>
          </div>
          <div className="profile-cta">
            <button className="cta-button-work">
              <a href="#contact">Trabajemos juntos</a>
            </button>
            <button className="cta-button-talk">
              <a href="#contact">Hablemos de tu proyecto</a>
            </button>
          </div>
        </div>
        <div className="profile-picture-code">
          <img src={window_code} alt="window-code" />
        </div>
        <div className="whoami-item profile-interactive-text">
          INTERACTIVE
        </div>
        <ul className="profile-blocks-appear">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="whoami-resume">
        <Resume />
      </div>
    </div >
  );
}

// <div className="fullstack">
//           <h2><span className="imperial-red">[</span><span>FullStack Developer</span><span className="imperial-red">]</span></h2>
//         </div>
//         <div className="profile-main-picture">
//           <div className="profile-resume flex flex-column p-4">
//             <div className="resume-slighly pt-4 px-5 m-auto">
//               <div className="moonstone slighly-left">
//                 {t('resumeslighlyfirst')}
//               </div>
//             </div>
//             <div className="resume-slighly pb-4 px-5 m-auto">
//               <div className="moonstone slighly-right">
//                 {t('resumeslighlylast')}
//               </div>
//             </div>
//             {/* <p className="moonstone"></p> */}
//             {/* <p></p> */}
//           </div>
//           <div className="profile-picture">
//             <img src={profilePicture} alt="javier-pic" />
//           </div>
//         </div>
//         <div className="typewriter">
//           <h1><span className="imperial-red">{<BsDashLg />}</span>Javier Villatoro<span className="imperial-red">{<BsDashLg />}</span></h1>
//         </div>