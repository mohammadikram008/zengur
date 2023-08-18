import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import './Index.css'
import { Divider } from '@mui/material';
import emailjs from "@emailjs/browser";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate, } from "react-router-dom";

const Index = () => {
    const form = useRef();
    const location = useLocation();
    const props = location.state;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        // Get the stored username from local storage when the component mounts
        const storedUsername = localStorage.getItem('username');

        if (storedUsername) {
            setUsername(storedUsername);
            console.log("storedUsername", storedUsername)
            if (username) {
                console.log("username", username)
                console.log("props1", props)
                if (props === "webdesign") {
                    navigate('/webform', "webdesign");
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeCv_4GIPw0YDgfxyqHVZ_wrc-DzTQ805yMJZPadKc2XP36EA/viewform?usp=sf_link", "_blank")

                } else if (props === "seoform") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSezCEmhWWbLwH0xpZH-CrTUnsXvLUw55AUB9s8okm0wUPTtJA/viewform?usp=sf_link", "_blank")

                    navigate('/seoform');
                    // navigate('/webpage', "seoform");
                }
                else if (props === "graphicdesgin") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSevN4Y4Q1Ec_noPnnxiFzb8jPO2ZjEd9e_f4bXnrJ51BmbcfQ/viewform?usp=sf_link", "_blank")

                    // window.location.href = '/graphicdesgin';
                    // history.push('/graphicdesgin');
                    navigate('/graphicdesgin');
                    // navigate('/webpage', "graphicdesgin");
                }
                else if (props === "applicationdev") {
                    navigate('/applicationdev');
                    // navigate('/webpage', "applicationdev");
                }
                else if (props === "domianhosting") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5t-w8IGcos3UFzwLaS_iCpjTgzF31A10BiMoVRJRAVUZ96g/viewform?usp=sf_link", "_blank")

                    navigate('/domianhosting');
                    // navigate('/webpage', "domianhosting");
                }
                else if (props === "maintenacesupport") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSc9ugEvIXDjNdA7xUkOCFTSeJp4HeHU3P_ad6z8s4eo9DWmgg/viewform?usp=sf_link", "_blank")

                    navigate('/maintenacesupport');
                    // navigate('/webpage', "maintenacesupport");
                }
            }
        }
    }, [location.pathname, username]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm('service_nr4xwne', 'template_d1wie65', form, 'PVWGOu1RVCawNzxBv')
            .then((response) => {
                localStorage.setItem('username', formData.name);
                console.log("emailprops", props)

                if (props === "webdesign") {
                    navigate('/webform', "webdesign");
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeCv_4GIPw0YDgfxyqHVZ_wrc-DzTQ805yMJZPadKc2XP36EA/viewform?usp=sf_link", "_blank")

                } else if (props === "seoform") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSezCEmhWWbLwH0xpZH-CrTUnsXvLUw55AUB9s8okm0wUPTtJA/viewform?usp=sf_link", "_blank")

                    navigate('/seoform');
                    // navigate('/webpage', "seoform");
                }
                else if (props === "graphicdesgin") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSevN4Y4Q1Ec_noPnnxiFzb8jPO2ZjEd9e_f4bXnrJ51BmbcfQ/viewform?usp=sf_link", "_blank")

                    // window.location.href = '/graphicdesgin';
                    // history.push('/graphicdesgin');
                    navigate('/graphicdesgin');
                    // navigate('/webpage', "graphicdesgin");
                }
                else if (props === "applicationdev") {
                    navigate('/applicationdev');
                    // navigate('/webpage', "applicationdev");
                }
                else if (props === "domianhosting") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5t-w8IGcos3UFzwLaS_iCpjTgzF31A10BiMoVRJRAVUZ96g/viewform?usp=sf_link", "_blank")

                    navigate('/domianhosting');
                    // navigate('/webpage', "domianhosting");
                }
                else if (props === "maintenacesupport") {
                    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSc9ugEvIXDjNdA7xUkOCFTSeJp4HeHU3P_ad6z8s4eo9DWmgg/viewform?usp=sf_link", "_blank")

                    navigate('/maintenacesupport');
                    // navigate('/webpage', "maintenacesupport");
                }
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({ ...prevData, [name]: value }));
    // };
    // // Sending Email
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     // console.log(form.current);
    //     emailjs
    //         .sendForm(
    //             "service_yqx6t8s",
    //             "template_e0drcpc",
    //             form.current,
    //             "_D8-Zzcad-BmexpHC"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //                 // Clear all input field values
    //                 form.current.reset();
    //                 // Success toast message
    //                 // toast.success("Email send Successfully");
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //                 // toast.error(error.text);
    //             }
    //         );
    // };

    // // Handle form input changes
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // Handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // You can perform form validation and submit data to the server here
    //     console.log(formData);
    //     navigate('/webform');
    // };
    return (
        <Fragment>

            {
                !username && !username ?
                    <div className='webpage-bg'>
                        <Row className='m-0 '>
                            <Col>
                                <form className="contact-form" onSubmit={handleSubmit} ref={form}>
                                    <h3>Let us know you better!</h3>

                                    <div className='divider' ></div>
                                    <div className='form-div'>

                                        <label htmlFor="name">Name:</label>
                                        <input

                                            onChange={handleChange}
                                            type="text"
                                            placeholder='Enter your Name here..'
                                            id="name"
                                            name="name"


                                        />
                                    </div>


                                    <div className='form-div'>

                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            // value={value.email}
                                            placeholder='Enter your Email here..'
                                            // onChange={handleInputChange}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>


                                    <div className='form-div'>

                                        <label htmlFor="contactNumber">Contact Number:</label>
                                        <input
                                            type="tel"
                                            id="contactNumber"
                                            name="message"
                                            placeholder='with country code'

                                            onChange={handleChange}
                                            required
                                        />
                                    </div>



                                    <button type="submit" className='button'>Next</button>
                                </form>
                            </Col>
                        </Row>

                    </div>
                    : <div className='loading'>"Loading......."</div>}
        </Fragment>
    )
}

export default Index
