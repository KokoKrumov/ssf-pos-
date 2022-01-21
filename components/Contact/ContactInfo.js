import React, { Component } from 'react';
import Link from 'next/link';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="contact-info-content">
                    <h3>Свържете се с нас чрез телефонния ни номет или email</h3>

                    <h2>
                        <Link href="tel:+0321984754">
                            <a>
                                <span className="number">+0 (321) 984 754</span>
                            </a>
                        </Link>
                        <span className="or">или</span>

                        <Link href="mailto:support@sierepos.com">
                            <a>
                                <span className="email">support@sierepos.com</span>
                            </a>
                        </Link>
                    </h2>

                    <ul className="social">
                        <li>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="bx bxl-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                <i className="bx bxl-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="bx bxl-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactInfo;
