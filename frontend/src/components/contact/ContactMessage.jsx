
import { useTranslation } from "react-i18next";

export default function ContactMessage(props) {
    const { work, project } = props;

    const message = work
        ? "Es un placer que me contactes para trabajar juntos."
        : "Comparteme tu idea o proyecto y agendemos una reunión";

    const { t } = useTranslation();

    const onSubmitForm = (event) => {
        event.preventDefault();
        alert('Form submitted');
    }

    return (
        <section className="contact_container">
            <div className="contact_containe_header">
                <h2>{message}</h2>
            </div>
            <div className="contact_container_body">
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