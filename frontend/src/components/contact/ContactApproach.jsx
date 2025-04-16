import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactMessage from './ContactMessage';
import work from '../../assets/img/work.svg';
import project from '../../assets/img/project.svg';
import './contact.css';

export default function Contact() {
    const [showWorkContact, setShowWorkContact] = useState(false);
    const [showProjectContact, setShowProjectContact] = useState(false);
    const { t } = useTranslation();

    const handleWorkContactMessage = () => {
        setShowWorkContact(true);
        setShowProjectContact(false);
    };
    const handleProjectContactMessage = () => {
        setShowProjectContact(true);
        setShowWorkContact(false);
    };

    return (
        <>
            {!showWorkContact && !showProjectContact && (
                <div id="contact" className="section-contact contact-container">
                    <div className="contact-content px-3">
                        <h1 className="title" aria-label="Contact Section Title">
                            {t("approach_title")}
                        </h1>
                    </div>
                    <div className="approach-glass-container">
                        <div className="approach-glass-dark-container">
                            <div className="approach-glass-twin-answer-container">
                                <span>
                                    <img 
                                        src={work} 
                                        alt="Contact for Web Development Work" 
                                        title="Contact for Web Development Work" 
                                    />
                                </span>
                                <p>{t("approach_subtitle_work")}</p>
                                <div className="approach-glass-twin-answer-button-container work">
                                    <span 
                                        onClick={handleWorkContactMessage} 
                                        aria-label="Contact for Web Development Work"
                                        title="Contact for Web Development Work"
                                    >
                                        {t("approach_answer_work_yes")}
                                    </span>
                                </div>
                            </div>
                            <div className="approach-glass-twin-answer-container">
                                <span>
                                    <img 
                                        src={project} 
                                        alt="Contact for App Development Projects" 
                                        title="Contact for App Development Projects" 
                                    />
                                </span>
                                <p>{t("approach_subtitle_project")}</p>
                                <div className="approach-glass-twin-answer-button-container project">
                                    <span 
                                        onClick={handleProjectContactMessage} 
                                        aria-label="Contact for App Development Projects"
                                        title="Contact for App Development Projects"
                                    >
                                        {t("approach_answer_project_yes")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showWorkContact && (
                <ContactMessage
                    work={showWorkContact}
                    onBack={() => {
                        setShowWorkContact(false);
                        setShowProjectContact(false);
                    }}
                />
            )}
            {showProjectContact && (
                <ContactMessage
                    project={showProjectContact}
                    onBack={() => {
                        setShowWorkContact(false);
                        setShowProjectContact(false);
                    }}
                />
            )}
        </>
    );
}