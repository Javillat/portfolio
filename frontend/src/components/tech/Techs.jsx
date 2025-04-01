
import { skills } from "../../data/helper";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { RxSlash } from "react-icons/rx";
import './tech.css';

const Technologies = () => {

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
        <section className="section-tech skills-container">
            <div className="skills-container-title">
                <h1 style={{ color: "var(--white)" }}><VscChevronLeft style={chebronConfig} /> My Tech <span>stack</span> <RxSlash style={slashConfig} /><VscChevronRight style={chebronConfig} /></h1>
                <h2 className="pt-3"> I'm constantly learning, acquiring new knowledge, and improving myself. </h2>
            </div>
            <div className="skills-container-skills">
                {
                    skills.map((skill, index) => {
                        return (
                            <button key={index} type="button" className="btn">
                                <img src={skill.icon} alt={skill.name} className="icon-img" />
                                <strong><span>{skill.name}</span></strong>
                            </button>
                        )
                    }
                    )
                }
            </div>
        </section>
    );
}

export default Technologies;