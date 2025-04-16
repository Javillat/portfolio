import React from 'react';
import { useTranslation } from 'react-i18next';


const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="footer__container">
            <div className="footer__container-left">
                <p><span className="name-gradient">&copy;</span> 2025 <span className="name-gradient">Javier Villatoro.</span> {t('footer_rights')}</p>
                <p>{t('footer_credits')} <span className="name-gradient">Javier Villatoro</span></p>
            </div>
            <div className="footer__container-right">
                <div className="footer__container-right__blogs">
                    <a 
                        href="https://www.javiervillatoro.dev/blog" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="Visit Javier Villatoro's Blog"
                    >
                        <h1>{t('footer_blog_link')}</h1>
                    </a>
                    <h2 className="gray-text">{t('footer_blog')}</h2>
                    <a 
                        href="https://www.javiervillatoro.dev/insights" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="View Javier Villatoro's Insights"
                    >
                        <h1>{t('footer_insight_link')}</h1>
                    </a>
                    <h2 className="gray-text">{t('footer_insight')}</h2>
                </div>
                <div className="footer__container-links__left">
                    <a href="#top" title="Back to top of the page">{t('footer_links_top')}</a>
                    <a href="#resume" title="View Resume section">{t('footer_links_resume')}</a>
                    <a href="#projects" title="View Projects section">{t('footer_links_projects')}</a>
                    <a href="#tech" title="View Tech section">{t('footer_links_tech')}</a>
                    <a href="#contact" title="View Contact section">{t('footer_links_contact')}</a>
                </div>
                <div className="footer__container-links__right">
                    <p>{t('footer_links_social')}:</p>
                    <a 
                        href="https://www.linkedin.com/in/javillatoro-full-stack/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn Profile"
                        title="Follow Javier Villatoro on LinkedIn"
                    >
                        <img 
                            src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" 
                            loading="lazy" 
                            alt="LinkedIn" 
                            className="social-icon" 
                        />
                    </a>
                    <a 
                        href="https://www.facebook.com/javiervillatoro.dev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container" 
                        aria-label="Facebook Profile"
                        title="Follow Javier Villatoro on Facebook"
                    >
                        <img 
                            src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" 
                            loading="lazy" 
                            alt="Facebook" 
                            className="social-icon" 
                        />
                    </a>
                    <a 
                        href="https://www.instagram.com/javier.villatoro/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container" 
                        aria-label="Instagram Profile"
                        title="Follow Javier Villatoro on Instagram"
                    >
                        <img 
                            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" 
                            loading="lazy" 
                            alt="Instagram" 
                            className="social-icon" 
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
