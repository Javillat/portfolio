
const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__container-right">
                <p>&copy; 2025 Javier Villatoro. All rights reserved.</p>
                <p>Designed and developed by Javier Villatoro</p>
            </div>
            <div className="footer__container-links">
                <a href="#top" className="scroll-to-top">Back to top</a>
                <a href="#about" className="scroll-to-about">About</a>
                <a href="#projects" className="scroll-to-projects">Projects</a>
                <a href="#contact" className="scroll-to-contact">Contact</a>
                <a href="#resume" className="scroll-to-resume">Resume</a>
                <a href="#tech" className="scroll-to-tech">Tech</a>
            </div>
        </div>
    );
};

export default Footer;
// This code defines a Footer component that displays copyright information and links to different sections of the website. It uses React for rendering and CSS for styling. The component is structured to be responsive and user-friendly, allowing easy navigation back to the top or to specific sections of the page.
