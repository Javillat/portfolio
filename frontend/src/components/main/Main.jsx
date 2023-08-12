import Whoami from "../whoami/Whoami";
import Projects from "../projects/Projects";
import Technologies from "../tech/Techs";
import Achievement from "../achievement/Achievement";
import './main.css'
import '../solution/solutions.css'
import '../projects/projects.css'
import '../tech/tech.css'
import '../achievement/achievement.css'
import '../certificate/certificate.css'
import '../contact/contact.css'
import '../recommended/recommended.css'
// import { Outlet } from "react-router-dom"; 

export default function Main() {

    return (
        <main className="main">
            <aside id="contact-float-left"></aside>
            <article id="social-networs-right"></article>
            <section className="section-resume-perfil">
                <Whoami />
            </section>
            <section className="section-solutions">
                <h1>Solutions</h1>
                {/* <Outlet /> */}
            </section>
            <section className="section-projects">
                <Projects />
                {/* <Outlet /> */}
            </section>
            <section className="section-tech">
                <p>Technologies</p>
                <Technologies />
            </section>
            <section className="section-achievement">
                <h1>Achievements</h1>
                <Achievement />
            </section>
            <section className="section-certificate">
                <h1>Certificate</h1>
            </section>
            <section className="section-contact">
                <h1>Contact</h1>
            </section>
            <section className="section-recommended">
                <h1>Recommended</h1>
            </section>
            <div className="div-cv"></div>
            <footer id="copyleft">Footer</footer>

        </main>
    );
}