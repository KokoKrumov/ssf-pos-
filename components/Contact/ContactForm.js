import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import {useFormik} from "formik";

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            text: '',
        },
        onSubmit: values => {
            console.log('values: ', values);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="contact-form">
            <h2>Стартирайте Вашия успех сега</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                id={'name'}
                                placeholder="Вашето име"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="email"
                                name="email"
                                id={'email'}
                                placeholder="Вашият Email"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="tel"
                                name="phone"
                                id={'phone'}
                                placeholder="Телефонен номер"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject"
                                id={'subject'}
                                placeholder="Тема"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.subject}
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="text"
                                id={'text'}
                                cols="30" 
                                rows="6" 
                                placeholder="Вашето съобщение..."
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.text}
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 text-center">
                        <button type="submit" className="default-btn">
                            <i className='bx bxs-paper-plane'></i> 
                            Изпратете Съобщение <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
