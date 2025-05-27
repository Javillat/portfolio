import { skills } from "../../data/helper";
import { RxSlash } from "react-icons/rx";
import './tech.css';
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
    const { t } = useTranslation();
    const buttonsRef = useRef([]); // Referencia para los botones

    const chebronConfig = {
        color: "var(--jade)",
        size: "2em",
        filter: "drop-shadow(0 0 8px rgb(255,59,48/0.8))"
    };

    const slashConfig = {
        color: "var(--imperial-red)",
        size: "2em",
    };

    useEffect(() => {
        // Animación con GSAP
        gsap.fromTo(
            buttonsRef.current,
            { opacity: 0, y: 20 }, // Estado inicial
            {
                opacity: 1,
                y: 0,
                stagger: 0.2, // Retraso entre botones
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".skills-container-skills",
                    start: "top 80%",
                    toggleActions: "play none none reverse", // Solo se reproduce una vez

                },
            }
        );
    }, []);

    return (
        <section id="tech" className="section-tech skills-container" aria-labelledby="tech-title">
            <header className="skills-container-title">
                <h1 id="tech-title" style={{ color: "var(--white)" }}>
                    {t('tech_title')}
                </h1>
                <h2 className="pt-3">{t('tech_subtitle')}</h2>
            </header>
            <div className="skills-container-skills">
                {
                    skills.map((skill, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn"
                            aria-label={`Skill: ${skill.name}`}
                            title={`Learn more about ${skill.name}`}
                            ref={(el) => (buttonsRef.current[index] = el)} // Asignar referencia a cada botón
                        >
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="icon-img"
                                loading="lazy"
                            />
                            <strong><span>{skill.name}</span></strong>
                        </button>
                    ))
                }
            </div>
        </section>
    );
};

export default Technologies;