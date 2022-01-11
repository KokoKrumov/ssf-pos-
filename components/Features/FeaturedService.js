import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedService extends Component {
    render() {
        return (
            <div className="features-card-section ptb-100 pb-md-150 bg-f8fbfa">
                <div className="container">
                    <div className="section-title">
                        <h2 className="mb-2">Ре/Стартирайте вашият бизнес в 4 бързи стъпки!</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bx-user'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Създайте профил</a>
                                    </Link>
                                </h3>
                                <p>Използвайте нашата онлайн форма за да създадете профил на вашата фирма и своя първи магазин/ресторант.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bx-user-plus'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Добавете Потребители</a>
                                    </Link>
                                </h3>
                                <p>Създайте профили на вашите служители. Мотивирайте вашите служители да израстват, като им делегирате по - високи права.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bxl-play-store'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Свалете приложението от Google Play</a>
                                    </Link>
                                </h3>
                                <p>Всички приложения могат да бъдат свалени от Google Play.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-features-card tx-center">
                                <i className='bx bxs-plane-take-off'></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Ръководете вашият бизнес така както никога досега</a>
                                    </Link>
                                </h3>
                                <p>Управлявайте вашият бизнес бързо, лесно, удобно и ефективно.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedService;
