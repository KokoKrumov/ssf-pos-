import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Features extends Component {
    render() {
        return (
            <section className="features-area ptb-100 pt-md-180 pb-md-150">
                <div className="container">
                    <div className="section-title">
                        <h2>Всичко, от което имате нужда</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                    <h3>Една мощна платформа</h3>
                                    <p>Всички инструменти необходими да менажирате вашият бизнес на едно място. Без инсталационни такси.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={100} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-customize'></i>
                                    </div>
                                    <h3>Лесна за използване</h3>
                                    <p>Всеки потребител може да бъде обучен за по -малко от 30 минути.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={150} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-stats'></i>
                                    </div>
                                    <h3>Справки и статистики</h3>
                                    <p>Адаптирайте се към бързо променящият се и данамичен бизнес свят.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="zoomIn" delay={200} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-food-menu'></i>
                                    </div>
                                    <h3>Виртуално Меню</h3>
                                    <p>Вашето меню се променя в реално време според вашите изисквания.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
