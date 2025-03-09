import React from "react";

// import TwitterIcon from '@mui/icons-material/Twitter';
import Brand from '../../assets/brand/Brand';

import { useTranslation } from "react-i18next";
import profilePicture from "../../assets/img/selfprofile.png";
import { BsDashLg } from "react-icons/bs";
import Resume from "../resume/Resume";

import "./whoami.css";

export default function Whoami() {
 
  //console.log(orangecolor);

  const { t } = useTranslation();

  return (
    <div className="whoami-superior">
      <div className="whoami_container">
        <div className="fullstack">
          <h2><span className="imperial-red">[</span><span>FullStack Developer</span><span className="imperial-red">]</span></h2>
        </div>
        <div className="profile-main-picture">
          <div className="profile-resume flex flex-column p-4">
            <div className="resume-slighly pt-4 px-5 m-auto">
              <div className="moonstone slighly-left">
                {t('resumeslighlyfirst')}
              </div>
            </div>
            <div className="resume-slighly pb-4 px-5 m-auto">
              <div className="moonstone slighly-right">
                {t('resumeslighlylast')}
              </div>
            </div>
            {/* <p className="moonstone"></p> */}
            {/* <p></p> */}
          </div>
          <div className="profile-picture">
            <img src={profilePicture} alt="javier-pic" />
          </div>
        </div>
        <div className="typewriter">
          <h1><span className="imperial-red">{<BsDashLg />}</span>Javier Villatoro<span className="imperial-red">{<BsDashLg />}</span></h1>
        </div>
        <div>
          <Brand />
        </div>
      </div>
      <div className="whoami-resume">
        <Resume />
      </div>
    </div>
  );
}
