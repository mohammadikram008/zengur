import React, { Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'
import app from '../assets/Images/developer.png'
import msword from '../assets/Images/word.png'
import web from '../assets/Images/code.png'
import person from '../assets/Images/personwithcomp.jpg'
import chooseus from '../assets/Images/newimg.jpg'
import art from '../assets/Images/art-and-design.png'
import documents from '../assets/Images/documentation.png'
import domainhost from '../assets/Images/development.png'
import support from '../assets/Images/headphone.png'
import './Index.css'
const SeoPage = () => {
    return (
        <Fragment>
            <div className='web-main'>
                <div className='web-hero'>
                    <div className='web-heading'>
                        <h1>SEO AGENCY</h1>
                    </div>
                    <p >A web design service creates visually appealing and user-friendly websites, merging creativity and functionality to showcase brands effectively, engage users, and attain online goals, ultimately expanding businesses. By attracting traffic to the brand name, it aids in reaching new customers and broadening the customer base.
                    </p>
                    <div className='web-heading'>
                        <Button className='web-btn'>Send Your Enguiry</Button>
                    </div>
                </div>
            </div>
            <div className='services-heading' id="service">
                <h1>WHY WE ARE THE BEST MARKETING AGENCY?</h1>
            </div>
            <div className='seo-prag'>
                <p>A web design service creates visually appealing and user-friendly websites, merging creativity and functionality to showcase brands effectively, engage users, and attain online goals, ultimately expanding businesses. By attracting traffic to the brand name, it aids in reaching new customers and broadening the customer base.
                </p>
            </div>
            <div className=' hero-first-col'>
                <div className='hero-headingour'>
                    <h1>Why SEO is Importent? </h1>
                    <p>

                        it serves as a digital storefront and a primary point of interaction with customers in the online world. A well-designed website creates a positive first impression, reflecting the professionalism and credibility of the brand. It enhances user experience by ensuring easy navigation, clear presentation of information, and mobile responsiveness, which all contribute to keeping visitors engaged. An effective web design aligns with the brand's identity, reinforcing its visual elements and messaging
                    </p>

                </div>
                <div className='hero-colimg'>
                    <img src={person} alt='image' />
                </div>


            </div>
            <div className=' hero-first-cols'>
                <div className='hero-colimgs'>
                    <img src={chooseus} alt='image' />
                </div>
                <div className='hero-headings'>
                    <h1>Why  SEO is Importent? </h1>
                    <p>
                        Responsive web design enhances user experience by adjusting a website's layout and content to suit different devices and screen sizes. This adaptability ensures a smooth browsing experience across desktops, tablets, and smartphones, maintaining consistent visuals and readability without requiring users to zoom or scroll excessively. Mobile-friendly navigation, quicker loading times, and improved SEO contribute to reduced bounce rates and increased engagement. This approach fosters user-friendly interactions and supports businesses in effectively reaching a wider audience.

                    </p>
                </div>
            </div>
            <div className='services-heading' id="service">
                <h1>WHAT WE OFFER?</h1>
            </div>
            <Row className='m-0 main-row'>
                <Col md='4' sm='12'>
                    <div className='services-card'
                    // onClick={(e) => handleChange("graphicdesgin")}
                    >
                        <div className='services-img'><img src={art}></img></div>
                        <div className='services-content'>
                            <h1>Web Design </h1>
                            {/* Ignite your brand's success with our powerful Graphic Design and Branding services. Our expert designers craft visuals that captivate and drive impact, creating a cohesive brand identity that resonates. Elevate your brand today for lasting impressions. Contact us now and unlock the true potential of compelling design and branding.</p>  */}

                            <p> Branding & Design services are people’s view and the perception that makes your business visible as well as reliable. Like: Logo, Business Stationery Design,Contact us now and unlock the true potential of compelling design and branding.</p>
                            {/* <img src={arrow} className='arrow' /> */}
                        </div>
                    </div>
                </Col>
                <Col md='4' sm='12' xs='12'>
                    <div className='services-card'
                    // onClick={(e) => handleChange("webdesign")}
                    >
                        <div className='services-img'><img src={web}></img></div>
                        <div className='services-content'>
                            <h1>SEO Consultancy</h1>
                            <p>At Zengur, we blend creativity and technology to craft websites that make a lasting impact. Our team of skilled designers and developers collaborate seamlessly to create an interactive and convincing experience that engages visitors and drives results.</p>
                            {/* <img src={arrow} className='arrow' /> */}
                        </div>
                    </div>
                </Col>

                <Col md='4' sm='12' xs='12'><div className='services-card'
                // onClick={(e) => handleChange("seoform")}
                >
                    <div className='services-img'>
                        <img src={documents}></img></div>
                    <div className='services-content'>
                        <h1>Off-Page SEO</h1>
                        <p>

                            Boost your online visibility with our SEO services. We optimize your website's content, technical aspects, and link profile to improve search engine rankings. Our data-driven strategies ensure targeted traffic and measurable results. Contact us now to enhance your digital presence.</p>
                        {/* <img src={arrow} className='arrow' /> */}
                    </div>
                </div></Col>
            </Row>
            <Row className='m-0 main-row'>
                <Col md='4' sm='12'>
                    <div className='services-card'
                    // onClick={(e) => handleChange("graphicdesgin")}
                    >
                        <div className='services-img'><img src={art}></img></div>
                        <div className='services-content'>
                            <h1>Content Marketing</h1>
                            {/* Ignite your brand's success with our powerful Graphic Design and Branding services. Our expert designers craft visuals that captivate and drive impact, creating a cohesive brand identity that resonates. Elevate your brand today for lasting impressions. Contact us now and unlock the true potential of compelling design and branding.</p>  */}

                            <p> Branding & Design services are people’s view and the perception that makes your business visible as well as reliable. Like: Logo, Business Stationery Design,Contact us now and unlock the true potential of compelling design and branding.</p>
                            {/* <img src={arrow} className='arrow' /> */}
                        </div>
                    </div>
                </Col>
                <Col md='4' sm='12' xs='12'>
                    <div className='services-card'
                    // onClick={(e) => handleChange("webdesign")}
                    >
                        <div className='services-img'><img src={web}></img></div>
                        <div className='services-content'>
                            <h1>Social Media Managment</h1>
                            <p>At Zengur, we blend creativity and technology to craft websites that make a lasting impact. Our team of skilled designers and developers collaborate seamlessly to create an interactive and convincing experience that engages visitors and drives results.</p>
                            {/* <img src={arrow} className='arrow' /> */}
                        </div>
                    </div>
                </Col>

                <Col md='4' sm='12' xs='12'><div className='services-card'
                // onClick={(e) => handleChange("seoform")}
                >
                    <div className='services-img'>
                        <img src={documents}></img>
                    </div>
                    <div className='services-content'>
                        <h1>Social Media Marketing</h1>
                        <p>

                            Boost your online visibility with our SEO services. We optimize your website's content, technical aspects, and link profile to improve search engine rankings. Our data-driven strategies ensure targeted traffic and measurable results. Contact us now to enhance your digital presence.</p>
                        {/* <img src={arrow} className='arrow' /> */}
                    </div>
                </div></Col>
            </Row>


        </Fragment>
    )
}

export default SeoPage