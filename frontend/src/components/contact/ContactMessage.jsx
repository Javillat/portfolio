
import { useTranslation } from "react-i18next";
import blobWork from "../../assets/img/work.svg"
import blobProject from "../../assets/img/project.svg"
import back from "../../assets/img/back.svg"
import { useNavigate } from "react-router-dom";

export default function ContactMessage(props) {
    const { work, project } = props;

    const navigate = useNavigate();

    const { t } = useTranslation();

    const message = work
        ? t("text_work")
        : t("text_project");

    const onSubmitForm = (event) => {
        event.preventDefault();
        alert('Form submitted');
    }

    const handleBack = (event) => {
        event.preventDefault();
        navigate("/")
    }

    return (
        <section className="contact-container">
            <div className="contact__container__body">
                <div className="contact__container__body__text">
                    <div className="contact__container__header p-3">
                        <img src={back} alt="Ir atrás" onClick={handleBack} />
                    </div>
                    <div className="contact__container__body__text-image">
                        <img src={work ? blobWork : blobProject} alt="Blob" />
                    </div>
                    <h1>{message}</h1>
                </div>
                <div className="contact__container__body__form">
                    <form onSubmit={onSubmitForm} className='contact__container__body__form-form'>
                        <div className="contact__container__body__form__group">
                            <label htmlFor="company-name">{t("contact_company")}</label>
                            <input type="text" id="company-name" name="company-name" />
                        </div>
                        <div className="contact__container__body__form__group">
                            <label htmlFor="name">{t("contact_name")}</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="contact__container__body__form__group">
                            <label htmlFor="name">{t("contact_email")}</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="contact__container__body__form__group">
                            <label htmlFor="name">{t("contact_phone")}</label>
                            <input type="text" name="phone" />
                        </div>
                        <div className="contact__container__body__form__group">
                            <label htmlFor="name">{t("contact_message_left")}</label>
                            <textarea name="message" cols="50" rows="10" placeholder="Scope, timeline, budget, etc." />
                        </div>
                        <button type="submit" className='form-submit-btn'>{t("contact_button")}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};