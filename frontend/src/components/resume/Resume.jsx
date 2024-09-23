import React from "react";
import { useTranslation } from "react-i18next";
import './resume.css';



export default function Resume() {

    const { t } = useTranslation();

    return (
        <div className="resume-div">
            {/* <p className="resume-title">{t('resume')}</p> */}
            {/* <div className="resume-perfil justify-content-center">
                
            </div> */}
        </div>
    );
}