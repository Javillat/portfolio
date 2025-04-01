import React from "react";
import { Link } from "react-router-dom"; // Added import for Link
import { useTranslation } from "react-i18next";
import profilePicture from "../../assets/img/profile.PNG";
import window_code from "../../assets/img/window_code.png";
import { BsChevronRight, BsDashLg } from "react-icons/bs";
import star from "../../assets/icons/star.svg";
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
          <div className="whoami-quihubole"><span className="imperial-red" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 59, 48, 0.8))' }} ><BsChevronRight /></span>Bienvenido a mi mundo!</div>
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
              <Link to="contact/work">Trabajemos juntos</Link>
            </button>
            <button className="cta-button-talk">
              <Link to="contact/project">Hablemos de tu proyecto</Link>
            </button>

          </div>
        </div>
        <div className="profile-picture-code">
          <img src={window_code} alt="window-code" />
        </div>
        <section className="whoami-item profile-interactive-text margin-20">
          <div className="py-4 py-lg-8 overflow-hidden first-item-slider"></div>
          <div className="d-flex align-items-center justify-content-center overflow-hidden py-1_5 lg-py-3 second-item-slider">
            <div className="d-flex flex-row p-2 overflow-hidden custom-group custom-group">
              <div className="d-flex flex-row justify-content-around custom-marquee">
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Accessible</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "#FFF" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Responsive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Dynamic</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Scalable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Search Optimized</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Interactive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Secure</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Reliable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Engaging</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div></div>
              <div className="d-flex flex-row justify-content-around custom-marquee">
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Accessible</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Responsive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Dynamic</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Scalable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Search Optimized</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Interactive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Secure</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Reliable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Engaging</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div></div>
              <div className="d-flex flex-row justify-content-around custom-marquee">
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Accessible</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Responsive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Dynamic</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Scalable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Search Optimized</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Interactive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Secure</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Reliable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Engaging</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div></div>
              <div className="d-flex flex-row justify-content-around custom-marquee">
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Accessible</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Responsive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Dynamic</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Scalable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Search Optimized</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Interactive</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Secure</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Reliable</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
                <div className="d-inline-flex align-items-center custom-gap">
                  <span className="text-uppercase fw-semibold custom-text">Engaging</span>
                  <img alt="star" loading="lazy" width="28" height="28" decoding="async" className="custom-width" style={{ color: "transparent" }} src={star} /></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Resume />
    </div >
  );
}
