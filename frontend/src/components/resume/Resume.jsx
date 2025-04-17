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

        const keywords = ['desarrollador ','full-stack ','developer '];

        words.forEach((word) => {
            const isKeyword = keywords.includes(word.textContent);
            tl.to(word, {
                color: isKeyword ? 'var(--jade)' : '#eee',
                duration: 0.5
            });
        });

        return () => tl.kill();
    }, []);

    return (
        <section id="resume" className="section-resume resume-back-text">
            <div className="resume-text" ref={containerRef}>
                <p>{splitWords}</p>
            </div>
        </section>
    );
}
