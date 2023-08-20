import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import g1 from '.././assets/designstan-background.png'
import img1 from '.././assets/Images/developer.png'
import img2 from '.././assets/Images/code.png'
import img3 from '.././assets/Images/development.png'
import img4 from '.././assets/Images/headphone.png'
import img5 from '.././assets/Images/art-and-design.png'
import './Index.css'
import OurServices from '../OurServices/Index'
import Footer from '../Footer/Index'
import Contactus from '../ContactUs/Index'
import { Element } from 'react-scroll';
import person from '../assets/Images/personwithcomp.jpg'
import chooseus from '../assets/Images/newimg.jpg'
import laptops from '../assets/Images/loptops.jpg'
import whatsappicon from '../assets/Images/whatsappicon.jpg'
import { Link } from 'react-router-dom'
import Aboutus from '../Aboutus/Index'
import FAQ from '../FAQ/Index'
// import '../css/HeroSection.css'
import Portfolio from '../Portfolio/Index'
const Index = () => {

    const portfolioItems = [
        {
            imageUrl: `${img1}`,
            // title: 'Project 1',
            // description: 'Description of Project 1',
        },
        {
            imageUrl: `${img2}`,
            // title: 'Project 2',
            // description: 'Description of Project 2',
        },
        {
            imageUrl: `${img3}`,
            // title: 'Project 3',
            // description: 'Description of Project 2',
        },
        {
            imageUrl: `${img4}`,
            // title: 'Project 4',
            // description: 'Description of Project 2',
        },
        {
            imageUrl: `${img5}`,
            // title: 'Project 5',
            // description: 'Description of Project 2',
        },
        {
            imageUrl: `${img1}`,
            // title: 'Project 1',
            // description: 'Description of Project 1',
        },
        {
            imageUrl: `${img2}`,
            // title: 'Project 2',
            // description: 'Description of Project 2',
        },
        {
            imageUrl: `${img3}`,
            // title: 'Project 3',
            // description: 'Description of Project 2',
        },
        {
            imageUrl: `${img4}`,
            // title: 'Project 4',
            // description: 'Description of Project 2',
        },
        // Add more items as needed
    ];
    // // State for Active index
    // const [activeIndex, setActiveIndex] = React.useState(0);

    // // State for Animation
    // const [animating, setAnimating] = React.useState(false);

    // // Sample items for Carousel
    // //  const items = [
    // //      {
    // //          caption: 'Sample Caption One',
    // //          src:'https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png',
    // //          altText: 'Slide One'
    // //      },
    // //      {
    // //          caption: 'Sample Caption Two',
    // //          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png',
    // //          altText: 'Slide Two'
    // //      }
    // //  ];

    // // Items array length
    // const itemLength = items.length - 1

    // // Previous button for Carousel
    // // Previous button for Carousel
    // const previousButton = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === 0 ?
    //         itemLength : activeIndex - 1;
    //     setActiveIndex(nextIndex);
    // }

    // // Next button for Carousel
    // const nextButton = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === itemLength ?
    //         0 : activeIndex + 1;
    //     setActiveIndex(nextIndex);
    // }

    // // Carousel Item Data
    // const carouselItemData = items.map((item) => {
    //     return (
    //         <CarouselItem
    //             key={item.src}
    //             onExited={() => setAnimating(false)}
    //             onExiting={() => setAnimating(true)}
    //         >
    //             <img src={item.src} alt={item.altText} />
    //         </CarouselItem>
    //     );
    // });
    const openWhatsAppChat = () => {
        const phoneNumber = '+923357944011'; // Replace with your WhatsApp phone number

        // Construct the WhatsApp chat URL
        const url = `https://wa.me/${phoneNumber}`;

        // Open the WhatsApp chat in a new tab
        window.open(url, '_blank');
    };
    return (
        <Fragment>

            <Row className='m-0 mian-page'>
                <Col md="6" className=' hero-first-col'>
                    <div className='hero-heading'>
                        <h1>Give your business a digital edge!<br />Let us help you reach  more cutomers online! </h1>
                        <div className='button'>
                            <a className="elementor-button elementor-button-link elementor-size-sm" href="#contact-section">
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Get in Touch</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='hero-colimg'>
                        <img src={laptops} alt='image' />
                    </div>


                </Col>
                <Col md="6" className=' hero-first-cols'>
                    <div className='hero-colimgs'>
                        <img src={chooseus} alt='image' />
                    </div>
                    <div className='hero-headings'>
                        <h1>Why Choose Us: </h1>
                        <p><ul className='build-points'>
                            <li> Creative and innovative designs</li>
                            <li>Attention to detail and user-centric approach</li>
                            <li> Timely project delivery</li>
                            <li> Transparent communication and collaboration</li>
                            <li>Client satisfaction and testimonials</li>
                        </ul>
                        </p>
                    </div>
                </Col>
                <Col md="6" className=' hero-first-col'>
                    <div className='hero-headingour'>
                        <h1>Our Process: </h1>
                        <p>
                            <ul className='build-points'>
                                <li> Design and mockup creation</li>
                                <li> Development and coding</li>
                                <li> Testing and quality assurance</li>
                                <li> Client feedback and revisions</li>
                                <li> Launch and deployment</li>
                            </ul>
                        </p>

                    </div>
                    <div className='hero-colimg'>
                        <img src={person} alt='image' />
                    </div>


                </Col>

                <Col md="6" className='other-body'>

                    <Element name="about-section">
                        <OurServices />
                    </Element>
                    {/* <Element name="aboutus">
                        <Aboutus />
                    </Element> */}
                    <div className="app">
                        <h1>Company Portfolio</h1>
                        <Portfolio items={portfolioItems} />
                    </div>
                    <Element name="faq">
                        <FAQ />
                    </Element>
                    <Element name="contact-section" id="contact-section">
                        <Contactus />
                    </Element>
                </Col>
                <div className="whatsapp-button" onClick={openWhatsAppChat}>
                    <img src={whatsappicon} alt="WhatsApp Icon" />
                </div>
            </Row>
        </Fragment >
    )
}

export default Index
