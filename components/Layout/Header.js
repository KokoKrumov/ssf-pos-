import React, {Component, useEffect, useState} from 'react';
import Link from '../../utils/ActiveLink';
import styles from './../../styles/Navbar.module.scss'
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router'

const Header = (props) => {

    let { t } = useTranslation();
    // Navbar 
    let _isMounted = false;
    const router = useRouter();
    const localeLang = router.locale;
    const [display, setDisplay] = useState(false);
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed)

        let bodyElement = document.getElementsByTagName("body")[0];
        if (collapsed){
            bodyElement.classList.add("body-freeze");
        } else {
            bodyElement.classList.remove("body-freeze");
        }
    }




    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);

        return () => {
            _isMounted = false;
        };
    });

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className={`navbar-area navbar-style-two ${styles.navbarArea__c}`}>
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <span className="navbar-brand__logo-wrap">
                                        <img src="/images/Logo.svg" alt="logo" />
                                    </span>
                                    <span> Siere POS</span>
                                </a>
                            </Link>

                            <button
                                onClick={() => toggleNavbar()}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className={`navbar-nav`}>
                                    <li className="nav-item disabled">
                                        <Link href="/about-siere" activeClassName="active">
                                            <a className={`nav-link disabled ${styles.navItemLink__c}`}>{t("common:about")} Siere POS</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item disabled">
                                        <Link href="/about-us" activeClassName="active">
                                            <a className={`nav-link disabled ${styles.navItemLink__c}`}>{t("common:menu.aboutUs")}</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pricing" activeClassName="active">
                                            <a className={`nav-link ${styles.navItemLink__c}`}>{t("common:menu.prices")}</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/faq" activeClassName="active">
                                            <a className={`nav-link ${styles.navItemLink__c}`}>{t("common:menu.faq")}</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className={`nav-link ${styles.navItemLink__c}`}>
                                            <span className={'text-capitalize'}>{localeLang}</span> <i className='bx bx-chevron-down'></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href={router.asPath} locale={'bg'}>
                                                    <a className="nav-link">Bg</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href={router.asPath} locale={'en'}>
                                                    <a className="nav-link">En</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className={`others-options ${styles.othersOptions__c} d-block d-lg-none`}>
                                    <Link href="/login" activeClassName="active">
                                        <a className={`nav-link`}><i className="bx bx-log-in"></i>{t("common:login")}</a>
                                    </Link>
                                    <Link href="/contact-us">
                                        <a className="default-btn mr-3">
                                            <i className="bx bxs-hot"></i> {t("common:testNow")} <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className={`others-options ${styles.othersOptions__c} d-none d-lg-flex`}>
                                <Link href="/login" activeClassName="active">
                                    <a className={`nav-link`}><i className="bx bx-log-in"></i>{t("common:login")}</a>
                                </Link>
                                <Link href="/contact-us">
                                    <a className="default-btn mr-3">
                                        <i className="bx bxs-hot"></i> {t("common:testNow")} <span></span>
                                    </a>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
