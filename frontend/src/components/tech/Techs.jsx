import { skills } from "../../data/helper";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { RxSlash } from "react-icons/rx";
import './tech.css';
import { useTranslation } from "react-i18next";

const Technologies = () => {

    const { t } = useTranslation();
    
    const chebronConfig = {
        color: "var(--jade)",
        size: "2em",
        filter: "drop-shadow(0 0 8px rgb(255,59,48/0.8))"
    }

    const slashConfig = {
        color: "var(--imperial-red)",
        size: "2em",
    }

    return (
        <section id="tech" className="section-tech skills-container" aria-labelledby="tech-title">
            <header className="skills-container-title">
                <h1 id="tech-title" style={{ color: "var(--white)" }}>
                    <VscChevronLeft style={chebronConfig} /> {t('tech_title')} <RxSlash style={slashConfig} /><VscChevronRight style={chebronConfig} />
                </h1>
                <h2 className="pt-3">{t('tech_subtitle')}</h2>
            </header>
            <div className="skills-container-skills">
                {
                    skills.map((skill, index) => {
                        return (
                            <button 
                                key={index} 
                                type="button" 
                                className="btn" 
                                aria-label={`Skill: ${skill.name}`}
                                title={`Learn more about ${skill.name}`}
                            >
                                <img 
                                    src={skill.icon} 
                                    alt={`${skill.name} icon`} 
                                    className="icon-img" 
                                    loading="lazy" 
                                />
                                <strong><span>{skill.name}</span></strong>
                            </button>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Technologies;