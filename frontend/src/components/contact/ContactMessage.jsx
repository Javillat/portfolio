
import { useTranslation } from "react-i18next";
import blobWork from "../../assets/img/work.svg"
import blobProject from "../../assets/img/project.svg"
import back from "../../assets/img/back.svg"

export default function ContactMessage(props) {

    const { t } = useTranslation();

    const { work, project, onBack } = props;

    const message = work
        ? t("text_work")
        : t("text_project");

    const onSubmitForm = (event) => {
        event.preventDefault();
        alert('Form submitted');
    }

    return (
        <section className="contact-container">
            <div className="contact__container__body">
                <div className="contact__container__body__text">
                    <div className="contact__container__header p-3">
                        <img src={back} alt="Ir atrás" loading="lazy" onClick={onBack} />
                    </div>
                    <div className="contact__container__body__text-image">
                        <img src={work ? blobWork : blobProject} alt="Blob" loading="lazy" />
                    </div>
                    <h1><r-text>{message}</r-text></h1>
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