import Whoami from "../whoami/Whoami";
import './main.css'

export default function Main() {



    return (
        <main className="main">
            <aside id="contact-float-left"></aside>
            <article id="social-networs-right"></article>
            <section className="section-resume-perfil">
                <Whoami />
            </section>
            <section className="section-solutions"></section>
            <section className="section-projects"></section>
            <section className="ttech"></section>
            <section className="logros"></section>
            <section className="certifcate"></section>
            <section className="contact"></section>
            <section className="recomended"></section>
            <div className="div-cv"></div>
            <footer id="copyleft">Footer</footer>

        </main>
    );
}