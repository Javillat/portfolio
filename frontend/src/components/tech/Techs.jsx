
import { skills } from "../../data/helper";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { RxSlash } from "react-icons/rx";



import './tech.css';

const Technologies = () => {

    const chebronConfig = {
        color: "var(--jade)",
        size: "2em",
    }

    const slashConfig = {
        color: "var(--imperial-red)",
        size: "2em",
    }

    return (
        <section className="skills-container">
            <div className="skills-container-title">
                <h1><VscChevronLeft style={chebronConfig} /> Skills <RxSlash style={slashConfig} /><VscChevronRight style={chebronConfig} /></h1>
            </div>
            <div className="skills-container-skills">
                    {
                        skills.map((skill, index) => {
                            return (
                                <button key={index} type="button" className="btn">
                                    <img src={skill.icon} alt={skill.name} className="icon-img"/>
                                    <strong>{skill.name}</strong>
                                    <div id="container-stars">
                                        <div id="stars"></div>
                                    </div>

                                    <div id="glow">
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                    </div>
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