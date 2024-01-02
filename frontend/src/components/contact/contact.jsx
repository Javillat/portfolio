import { useState } from 'react';
import ProjectContactMessage from './projectContactMessage';
import JustContactMessage from './justContactMessage';
import './contact.css'

export default function Contact() {
    const [showProjectContact, setShowProjectContact] = useState(false);
    const [showJustContact, setShowJustContact] = useState(false);

    const handleProjectContactMessage = () => {
        setShowProjectContact(true);
        setShowJustContact(false);
    }
    const handleJustContactMessage = () => {
        setShowJustContact(true);
        setShowProjectContact(false);
    }
    return (
        <div className='container'>

            {!showProjectContact && !showJustContact && (
                <div className='contact-container'>
                    <div>
                        <h2 className="title">Get in touch</h2>
                    </div>
                    <div>
                        Do you want to talk about working together?
                    </div>
                    <div className='answer-container'>
                        <span className='enance-span' onClick={handleProjectContactMessage}>Yes</span>
                        <span className='enance-span' onClick={handleJustContactMessage}>No</span>
                    </div>
                </div>
            )}
            {/* Show project contact message if user clicked yes */}
            {showProjectContact && <ProjectContactMessage />}
            {/* Show just a regular contact message if user clicked no */}
            {showJustContact && <JustContactMessage />}
        </div>
    );
}