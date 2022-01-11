import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a className='footer-area__footer-logo' href="/">
                                        <span className='navbar-brand__logo-wrap'>
                                            <img src="/images/Logo.svg" alt="logo" />
                                        </span>
                                        <span className='footer-area__footer-logo__text'> Siere POS</span>
                                    </a>
                                </div>
                                <p className='footer-area__description'>Всички услуги на Сиере ПОС са направени да бъдат използвани лесно и интуитивно. Сиере ПОС може да бъде използван от малки и големи заведения. Винаги може да махате или слагате допълнителни услуги.</p>
                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="bx bxl-twitter"></i>
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

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>За Компанията</h3>

                                <ul className="services-list">
                                    <li className={'footer-item__disable'}>
                                        <Link href="/">
                                            <a className={'dis'}>За Siere POS</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>За нас</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/price">
                                            <a>Цени</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>За Продукта</h3>

                                <ul className="support-list">
                                    <li>
                                        <Link href="/faq">
                                            <a>Въпроси</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Изпратете запитване</a>
                                        </Link>
                                    </li>
                                    <li className={'footer-item__disable'}>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li className={'footer-item__disable'}>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                               <address>
                                   <h3>Адрес</h3>

                                   <ul className="footer-contact-info">
                                       <li>Място: <span>София, кв. Лозенец N: 30</span></li>
                                       <li>Email: <a href='mailto:hello@sieresoft.com'>hello@sieresoft.com</a></li>
                                       <li>Телефон: <a href='tel:+0984754'>+0 (321) 984 754</a></li>
                                   </ul>
                               </address>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright &copy; {currentYear} Siere POS.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
