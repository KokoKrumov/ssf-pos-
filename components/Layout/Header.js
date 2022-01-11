import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import styles from './../../styles/Navbar.module.scss'

class Header extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });

        let bodyElement = document.getElementsByTagName("body")[0];
        if (this.state.collapsed){
            bodyElement.classList.add("body-freeze");
        } else {
            bodyElement.classList.remove("body-freeze");
        }


    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
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
                                            {/*<img src="/images/App_Icon.svg" alt="logo" />*/}
                                        </span>
                                        <span> Siere POS</span>
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
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
                                        <li className="nav-item">
                                            <Link href="/about-siere" activeClassName="active">
                                                <a className={`nav-link disabled ${styles.navItemLink__c}`}>За Siere POS</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                                <a className={`nav-link disabled ${styles.navItemLink__c}`}>За нас</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/pricing" activeClassName="active">
                                                <a className={`nav-link ${styles.navItemLink__c}`}>Цени</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a className={`nav-link ${styles.navItemLink__c}`}>Въпроси</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className={`others-options ${styles.othersOptions__c} d-block d-lg-none`}>
                                        <Link href="/login" activeClassName="active">
                                            <a className={`nav-link`}><i className="bx bx-log-in"></i>Вход</a>
                                        </Link>
                                        <Link href="/contact-us">
                                            <a className="default-btn mr-3">
                                                <i className="bx bxs-hot"></i> Тествай сега <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className={`others-options ${styles.othersOptions__c} d-none d-lg-flex`}>
                                    <Link href="/login" activeClassName="active">
                                        <a className={`nav-link`}><i className="bx bx-log-in"></i>Вход</a>
                                    </Link>
                                    <Link href="/contact-us">
                                        <a className="default-btn mr-3">
                                            <i className="bx bxs-hot"></i> Тествай сега <span></span>
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
}

export default Header;
