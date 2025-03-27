import Whoami from "../whoami/Whoami";
import Projects from "../projects/Projects";
import Technologies from "../tech/Techs";
import Achievement from "../achievement/Achievement";
import Contact from "../contact/ContactApproach";
import SocialNetworkContact from "../socialnetworkcontact/SocialNetworkContact";
import NavigationButton from "../nav/Navigation";
import './main.css'
// import '../solution/solutions.css'
import '../projects/projects.css'
import '../tech/tech.css'
import '../achievement/achievement.css'
// import '../certificate/certificate.css'
import '../contact/contact.css'
import '../recommended/recommended.css'
// import { Outlet } from "react-router-dom"; 

export default function Main() {

    return (
        <main className="main">
            <aside>
                <NavigationButton />
            </aside>
            <aside>
                <SocialNetworkContact />
            </aside>
            <section className="section-resume-perfil">
                <Whoami />
            </section>
            <Technologies />
            <section className="section-projects">
                <Projects />
            </section>
            {/* <section className="section-achievement">
                <h1>Achievements</h1>
                <Achievement />
            </section>
            <section className="section-recommended">
                <h1>Recommended</h1>
            </section> */}
            <Contact />
            <ul className="profile-blocks-appear">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <footer id="copyleft">Footer</footer>
        </main>
    );
}