import React, { Fragment, useState } from 'react'
import { Row, Col, Input } from 'reactstrap'
import './Index.css'
import TextField from "@mui/material/TextField";
import { Divider } from '@mui/material';
const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        domain: '',
        question: '',
        description: '',
        contactNumber: '',
        selectedOption: '',
        brandname: '',
        websitetype: '',
        refrance: '',
        Branddescription: '',
        numberofpages: '',
        servicefeature1: '',
        servicefeature2: '',
        servicefeature3: '',
        Dycompanybriefly: '',
        domain: '',
        WebsitesUnderDomain: '',
        domianname: '',
        hostservice: '',
        representyourbrand: '',
        contentwesite: '',
        webimge: '',
        additionalreq: ''






    });
    const [hasDomain, setHasDomain] = useState(false);

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setHasDomain(value === 'yes');
    };

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
        alert("your data is submited you will be inform with in 24 hr thanks!")
        // You can perform form validation and submit data to the server here
        console.log(formData);
    };
    return (
        <Fragment>

            <div className='webform-bg'>
                <Row className='m-0 '>
                    <Col>
                        {window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeCv_4GIPw0YDgfxyqHVZ_wrc-DzTQ805yMJZPadKc2XP36EA/viewform?usp=sf_link"}

                        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9sScRWvI7Tu16ql6FBt7PS1npEyyHiMrgDczpPLkLxrGPFA/viewform?embedded=true" width="640" height="1709" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}


                        {/* <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Tell us what you want.</h3>

                            <div className='divider' ></div>
                            <div className='form-div'>
                                <label htmlFor="name" >Website Type</label>
                                <input
                                    type="text"
                                    placeholder='WebSite here...'
                                    id="websitetype"
                                    name="websitetype"
                                    value={formData.websitetype}
                                    onChange={handleInputChange}

                                />
                            </div>


                            <div className='form-div'>
                                <label htmlFor="email">Reference</label>
                                <input
                                    type="text"
                                    placeholder='Referance Link here..'
                                    id="refrance"
                                    name="refrance"
                                    value={formData.refrance}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <h3 className="heading">Give us a gist of your brand!</h3>
                            <div className='divider' ></div>
                            <div className='form-div'>
                                <label htmlFor="domain">Brand Name</label>
                                <input
                                    type="text"
                                    id="brandname"
                                    placeholder='Brand Name here..'
                                    name="brandname"
                                    value={formData.brandname}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className='form-div'>
                                <label htmlFor="question">Brand Description</label>

                                <input
                                    type="text"
                                    id="Branddescription"
                                    name="Branddescription"
                                    value={formData.Branddescription}
                                    placeholder='Brand Description'
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className='form-div'>
                                <label htmlFor="question">Numbers  of pages</label>

                                <input
                                    type="text"
                                    id="numberofpages"
                                    name="numberofpages"
                                    value={formData.numberofpages}
                                    placeholder='e.g 2,3'
                                    onChange={handleInputChange}

                                />
                            </div>

                            <span htmlFor="question"> Add 3 main services/features your company provides</span>

                            <input
                                type="text"
                                id="servicefeature1"
                                name="servicefeature1"
                                value={formData.servicefeature1}
                                placeholder='Service/feature 1'
                                onChange={handleInputChange}

                            />
                            <input
                                type="text"
                                id="servicefeature2"
                                name="servicefeature2"
                                value={formData.servicefeature2}
                                placeholder='Service/feature 2'
                                onChange={handleInputChange}

                            />
                            <input
                                type="text"
                                id="servicefeature3"
                                name="servicefeature3"
                                value={formData.servicefeature3}
                                placeholder='Service/feature 3'
                                onChange={handleInputChange}

                            />

                            <div className='form-div'>

                                <label htmlFor="question">Describe your company briefly</label>
                                <textarea
                                    id="Dycompanybriefly"
                                    name="Dycompanybriefly"
                                    value={formData.Dycompanybriefly}
                                    onChange={handleInputChange}
                                    placeholder='Describe your company briefly'

                                ></textarea>
                            </div>
                            <div className=''>
                                <div className='domian-div'>
                                    <h3>1) Do you have a Domain?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="yes"
                                            checked={hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="no"
                                            checked={!hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <h3>if yes,</h3>


                                <div className='form-div'>
                                    <label htmlFor="contactNumber">Domian Name:</label>
                                    <input
                                        type="tel"
                                        id="domianname"
                                        name="domianname"
                                        placeholder='Domain name..'
                                        value={formData.domianname}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div className='form-div'>
                                    <label htmlFor="contactNumber">Websites Under Domain:</label>
                                    <input
                                        type="tel"
                                        id="WebsitesUnderDomain"
                                        name="WebsitesUnderDomain"
                                        placeholder='Websites Under Domain'
                                        value={formData.WebsitesUnderDomain}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div>
                                    <h3>2) Do you have a hosting service?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="yes"
                                            checked={hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="no"
                                            checked={!hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>3) Do you need a logo to represent your brand?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="yes"
                                            checked={hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="no"
                                            checked={!hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>4) Do you need content for your website?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="yes"
                                            checked={hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="no"
                                            checked={!hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>5) Will you be providing product images and descriptions for your website?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="yes"
                                            checked={hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="no"
                                            checked={!hasDomain}
                                            onChange={handleOptionChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>6) If you have any additional requirements for the website (color scheme, animations, etc.), Please let us know below.</h3>
                                    <textarea
                                        id="additionalreq"
                                        name="additionalreq"
                                        value={formData.additionalreq}
                                        onChange={handleInputChange}

                                    ></textarea>
                                </div>
                            </div>
                            <div className='divider' ></div>
                            <h2 className="heading"> Thank you for sharing your preferences.</h2>
                            <p>We will meet your expectations.</p>

                            <button type="submit" className='button'>Submit</button>
                        </form> */}
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Index
