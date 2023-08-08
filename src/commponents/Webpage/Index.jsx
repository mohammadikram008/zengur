import React, { Fragment, useState } from 'react'
import { Row, Col } from 'reactstrap'
import './Index.css'
import { Divider } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
const Index = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        domain: '',
        question: '',
        description: '',
        contactNumber: '',
        selectedOption: '',
    });

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform form validation and submit data to the server here
        console.log(formData);
        navigate('/webform');
    };
    return (
        <Fragment>
            <div className='webpage-bg'>


                <Row className='m-0 '>
                    <Col>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Let us know you better!</h3>
                            {/* <label htmlFor="selectedOption">Business type:</label>
                        <select
                            id="selectedOption"
                            name="selectedOption"
                            value={formData.selectedOption}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Business type</option>
                            <option value="Option 1">Digital agency
                            </option>
                            <option value="Option 2">Advertising</option>
                            <option value="Option 3"> Club</option>
                            <option value="Option 3"> Event production</option>
                        </select> */}
                            <div className='divider' ></div>
                            <div className='form-div'>

                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    placeholder='Enter your Name here..'
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}

                                />
                            </div>


                            <div className='form-div'>

                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder='Enter your Email here..'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>


                            <div className='form-div'>

                                <label htmlFor="contactNumber">Contact Number:</label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    placeholder='with country code'
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>



                            <button type="submit" className='button'>Next</button>
                        </form>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Index
