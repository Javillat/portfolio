
import { skills } from "../../data/helper";
import './tech.css';

const Technologies = () => {


    return (
        <section className="skills-container">
            <div className="skills-container-title">
                <h1>Skills</h1>
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