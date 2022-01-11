import React, { Component } from 'react';

const Subscribe = ({title, subtitle}) => {
    return (
        <div className="subscribe-content subscribe-content__siere border-radius-0 ptb-100 pt-md-180 pb-md-150">
            <h2>{title}</h2>
            <p>{subtitle}</p>

            <a className="default-btn" href="/contact/">
                <i className="bx bxs-hot"></i>
                Свържете се с нас
                <span></span>
            </a>
        </div>
    )
}

export default Subscribe;
