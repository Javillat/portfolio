import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactMessage from './ContactMessage';
import './contact.css'

export default function Contact() {
    const [showWorkContact, setShowWorkContact] = useState(false);
    const [showProjectContact, setShowProjectContact] = useState(false);
    const { t } = useTranslation();

    const handleWorkContactMessage = () => {
        setShowWorkContact(true);
        setShowProjectContact(false);
    }
    const handleProjectContactMessage = () => {
        setShowProjectContact(true);
        setShowWorkContact(false);
    }
    return (
        <>
            {!showWorkContact && !showProjectContact && (
                <div className='contact-container'>
                    <div>
                        <h1 className="title">{t("approach_title")}</h1>
                    </div>
                    <div className='approach-glass-container'>
                        <div className='approach-glass-dark-container'>
                            <div className='approach-glass-twin-answer-container'>
                                {t("approach_subtitle_work")}
                                <div className='approach-glass-twin-answer-button-container work'>
                                    <span onClick={handleWorkContactMessage}>{t("approach_answer_work_yes")}</span>
                                </div>
                            </div>
                            <div className='approach-glass-twin-answer-container'>
                                {t("approach_subtitle_project")}
                                <div className='approach-glass-twin-answer-button-container project'>
                                    <span onClick={handleProjectContactMessage}>{t("approach_answer_project_yes")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showWorkContact && <ContactMessage work={showWorkContact} />}
            {showProjectContact && <ContactMessage project={showProjectContact} />}
        </>
    );
}