
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './resume.css';

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
    const { t } = useTranslation();
    const containerRef = useRef(null);

    const resumeText = t('resumetext');

    const splitWords = resumeText.split(" ").map((word, index) => (
        <span key={index} className="word">{word} </span>
    ));

    useEffect(() => {
        const words = containerRef.current.querySelectorAll(".word");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".resume-text",
                start: "top 90%",
                end: "center 50%",
                scrub: true,
                markers: false
            }
        });

        words.forEach((word, i) => {
            tl.to(word, {
                color: "#eee",
                duration: 0.5
            }, i * 0.1);
        });

        return () => tl.kill();
    }, []);

    return (
        <section className="section-resume resume-back-text">
            <div className="resume-text" ref={containerRef}>
                <p>{splitWords}</p>
            </div>
        </section>
    );
}
