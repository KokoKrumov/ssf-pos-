import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const ServiceLeftImageStyle = ({content}) => {
    const {id, title, image, description, bullets, link} = content;
    return (
        <div className="services-area__section services-area__left-image container-fluid">
            <div className="row align-items-center flex-column-reverse flex-lg-row">
                <div className="services-image">
                    <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                        <div className="image">
                            <img className={'img-fw'} src={image} alt="image" />
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="services-content">
                    <div className="content">
                        <h3>{title}</h3>
                        {description && <h5 className='services-area__description mb-4'>{description}</h5>}
                        <ul>
                            {bullets.map(item => {
                                const {id, text} = item;
                                return <li key={id}>
                                    <i className='bx bx-badge-check'></i>
                                    {text}
                                </li>
                            })}
                        </ul>
                        <Link href={link}>
                            <a className="default-btn black-btn">
                                <i className='bx bxs-arrow-to-right'></i>
                                Прочети повече
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ServiceLeftImageStyle;
