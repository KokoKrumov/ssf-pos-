import React from 'react';
import Link from 'next/link';

const PricingContent = ({title, priceContent}) => {

    return (
        <section className="pricing-area pt-100 pb-70 bg-f4f5fe">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                </div>

                <div className="tab pricing-list-tab">

                    <div className="tab_content">
                        <div className="row justify-content-center price-row">
                            {
                                priceContent.map(item => {
                                    const {id, name, price, subtitle, bullets, link} = item
                                    return (
                                        <div className="col-xl-4 col-md-6" key={id}>
                                        <div className="single-pricing-table left-align">
                                            <div>
                                                <div className="pricing-header">
                                                    <h3>{name}</h3>
                                                </div>

                                                <div className="price">
                                                    {price} <sub>лв/ ден</sub><br/>
                                                    <p>{subtitle}</p>
                                                </div>

                                                <ul className="pricing-features">
                                                    {bullets.map(item => {
                                                        const {id, text} = item;
                                                        return (
                                                            <li key={id}>
                                                                <i className="bx bxs-badge-check defaultBtnIcon"></i>
                                                                {text}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="btn-box">
                                                <Link href={link}>
                                                    <a className="default-btn">
                                                        <i className="bx bxs-hot"></i>
                                                        Започнете сега <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingContent;
