import React from 'react';
import PageTitleArea from "../../components/Common/PageTitleArea";
import ContactFormArea from "../../components/Contact/ContactFormArea";

const ContactUsView = () => {


    return (
        <>
            <section>
                <PageTitleArea
                    pageTitle="Свържете се с нас"
                    pageDescription="Ще се свържем с вас в най-близкият удобен момент."
                />
            </section>
            <section>
                <ContactFormArea/>
            </section>
        </>
    );
}

export default ContactUsView;
