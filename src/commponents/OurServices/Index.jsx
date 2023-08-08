import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'

import arrow from '../assets/right-arrow.png';
import web from '../assets/Images/code.png'
import app from '../assets/Images/developer.png'
import msword from '../assets/Images/word.png'
import documents from '../assets/Images/documentation.png'
import domainhost from '../assets/Images/development.png'
import support from '../assets/Images/headphone.png'
import art from '../assets/Images/art-and-design.png'
import './Index.css'
import { useNavigate } from 'react-router-dom';
const OurServices = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/webpage');
    }
    return (
        <Fragment>
            <div className='services-heading' id="service">
                <h1>OUR SERVICES</h1>
            </div>
            <Row className='m-0 main-row'>
                <Col md='4' sm='12'>
                    <div className='services-card'>
                        <div className='services-img'><img src={art}></img></div>
                        <div className='services-content'>
                            <h1>Graphic Design & Brading </h1>
                            <p>
                                Ignite your brand's success with our powerful Graphic Design and Branding services. Our expert designers craft visuals that captivate and drive impact, creating a cohesive brand identity that resonates. Elevate your brand today for lasting impressions. Contact us now and unlock the true potential of compelling design and branding.</p>  <img src={arrow} className='arrow' />
                        </div>
                    </div>
                </Col>
                <Col md='4' sm='12' xs='12'>
                    <div className='services-card' onClick={handleChange}>
                        <div className='services-img'><img src={web}></img></div>
                        <div className='services-content'>
                            <h1>Web Design & Development</h1>
                            <p>
                                Branding & Design
                                Branding and design services are people’s view and the perception that makes your business visible as well as reliable. Like: Logo, Business Stationery Design,Contact us now and unlock the true potential of compelling design and branding.</p>
                            <img src={arrow} className='arrow' />
                        </div>
                    </div>
                </Col>

                <Col md='4' sm='12' xs='12'><div className='services-card'>
                    <div className='services-img'><img src={documents}></img></div>
                    <div className='services-content'>
                        <h1>Search Engine Optimization</h1>
                        <p>

                            Boost your online visibility with our SEO services. We optimize your website's content, technical aspects, and link profile to improve search engine rankings. Our data-driven strategies ensure targeted traffic and measurable results. Contact us now to enhance your digital presence.</p>
                        <img src={arrow} className='arrow' />
                    </div>
                </div></Col>
            </Row>
            <Row className='m-0 main-row'>
                <Col md='4' sm='12' xs='12'><div className='services-card'>
                    <div className='services-img'><img src={app}></img></div>
                    <div className='services-content'>
                        <h1>Application Development</h1>
                        <p>

                            Data leaks, breaches, or mass corruption equate to serious devastation. Not just because you’ve lost a valuable asset, but your reputation, and market cap could be at stake. Communication Square's .</p>
                        <img src={arrow} className='arrow' />
                    </div>
                </div></Col>
                <Col md='4'><div className='services-card'>
                    <div className='services-img'><img src={domainhost}></img></div>
                    <div className='services-content'>
                        <h1>Domain & Hosting</h1>
                        <p>
                            Sometimes the best advocates for your brand or business are your current patrons! Be sure to check the “Community” tab on your Facebook page and see what your customers are saying.</p>
                        <img src={arrow} className='arrow' />
                    </div>
                </div></Col>
                <Col md='4'><div className='services-card'>
                    <div className='services-img'><img src={support}></img></div>
                    <div className='services-content'>
                        <h1>Maintenance & Support</h1>
                        <p>
                            Zengur is trusted by many client for their project Maintenance and on demand support. Maintenance & Support Services are usually helps our customers to keep their product up to date and bug free. The product may be Website or ecommerce portal.</p>
                        <img src={arrow} className='arrow' />
                    </div>
                </div></Col>
            </Row>

        </Fragment>
    )
}

export default OurServices