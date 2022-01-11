import React, {Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Link from 'next/link'
import styles from './../../styles/MainBanner.module.scss'

export default class MainBanner extends Component {
    render() {
        return (
            <section className={`digital-agency-banner dim-layer ${styles.digitalAgencyBanner__c}`}>
                <div className="container">
                    <div className={`digital-agency-banner-content `}>
                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                            <h1>Управлявайте <span className={styles.digitalAgencyBannerContentMainTitle__c}>Вашият Бизнес</span> с Един Поглед</h1>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                            <p>Автоматизирайте целият си бизнес с едно бизнес решение.<br/> Сега само с 0лв
                                инсталационна такса</p>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                            <Link href="/contact">
                                <a className="default-btn">
                                    <i className={`bx bxs-hot ${styles.defaultBtnIcon}`}></i> Започнете
                                    сега <span></span>
                                </a>
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        )
    }
}
