import React, {Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Link from 'next/link'
import styles from './../../styles/MainBanner.module.scss'

const MainBanner = ({t}) => {
	return (
		<section className={`digital-agency-banner dim-layer ${styles.digitalAgencyBanner__c}`}>
			<div className="container">
				<div className={`digital-agency-banner-content `}>
					<ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
						<h1>
							{t("home:hero.title")}
						</h1>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
						<p>
							{t("home:hero.automateYourBusiness")}<br/> {t("home:hero.installationFee")}
						</p>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
						<Link href="/contact">
							<a className="default-btn">
								<i className={`bx bxs-hot ${styles.defaultBtnIcon}`}></i>
								{t("common:startNow")}
								<span></span>
							</a>
						</Link>
					</ScrollAnimation>
				</div>
			</div>
		</section>
	)
}
export default MainBanner;
