import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

class ContactFormArea extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-features-list">
                                    <h2>Изберете нас</h2>
                                    <p>Увеличете продуктивността си и намалете стреса във вашия бизнес.</p>
                                    <p>Ние сме високо квалифицирани, отдадени и знаем как да рационализирате успеха Ви.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                {/* Contact Form */}
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <ContactInfo />
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormArea;
