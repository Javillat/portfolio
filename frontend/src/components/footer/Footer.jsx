
const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__container-left">
                <p>&copy; 2025 <span className="name-gradient">Javier Villatoro.</span> All rights reserved.</p>
                <p>Designed and developed by <span className="name-gradient">Javier Villatoro</span></p>
            </div>
            <div className="footer__container-right">
                <div className="footer__container-links__left">
                    <a href="#top" className="scroll-to-top">Back to top</a>
                    <a href="#resume" className="scroll-to-resume">Resume</a>
                    <a href="#projects" className="scroll-to-projects">Projects</a>
                    <a href="#tech" className="scroll-to-tech">Tech</a>
                    <a href="#contact" className="scroll-to-contact">Contact</a>
                </div>
                <div className="footer__container-links__right">
                    <p>Follow me on:</p>
                    <a href="https://www.linkedin.com/in/javier-villatoro-/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" loading="lazy" alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/javiervillatoro.dev" target="_blank" rel="noopener noreferrer" className="social-icon-container">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" loading="lazy" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/javier.villatoro/" target="_blank" rel="noopener noreferrer" className="social-icon-container">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" loading="lazy" alt="Instagram" className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
// This code defines a Footer component that displays copyright information and links to different sections of the website. It uses React for rendering and CSS for styling. The component is structured to be responsive and user-friendly, allowing easy navigation back to the top or to specific sections of the page.
