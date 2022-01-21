import React, { Component } from 'react';
import Image from "next/image";

class LoginView extends Component {
    render() {
        return (
            <section className="login-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="login-image">
                            <Image
                                src="/images/login-bg.jpg"
                                width="1920"
                                height="1280"
                                priority={true}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="login-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="login-form">
                                        <div className="logo login-form__logo">
                                            <a href="/">
                                                <Image
                                                    src="/images/Logo.svg"
                                                    width="120"
                                                    height="120"
                                                />
                                            </a>
                                        </div>

                                        <h3>Добре дошли в Siere POS</h3>

                                        <form>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Вашият email адрес"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    required
                                                    type="password"
                                                    placeholder="Вашата парола"
                                                    className="form-control"
                                                />
                                            </div>

                                            <button type="submit" className="default-btn">
                                                <i className="bx bxs-hot"></i> 
                                                Login 
                                                <span></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginView;

