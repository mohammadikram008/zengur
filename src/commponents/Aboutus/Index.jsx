import React from 'react'
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Index.css'
const Index = () => {
    return (
        <div className="about-us">
            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-description">
                    At Zengur, we are more than just a web development and design agency – we are your trusted partner in leveraging the digital landscape to elevate your business. With a passion for innovation and a commitment to excellence, we specialize in delivering tailored solutions for a wide spectrum of industries, including e-commerce, real estate, accounting firms, education, and blockchain technology.
                </p>

                <p className="about-description">
                    <h3>  Mission:</h3>
                    Zengur's mission is to create innovative digital solutions that empower businesses and individuals to thrive in the ever-evolving digital landscape. Through a commitment to excellence, collaboration, and cutting-edge technology, we aim to elevate our clients' online presence and help them achieve their unique objectives.

                </p>

                <p className="about-description">
                    <h3>  Value:</h3>
                    Innovation: We embrace creativity and stay at the forefront of technological advancements to deliver forward-thinking solutions.
                    Collaboration: Building strong partnerships, we work closely with our clients to co-create impactful results.
                    Client-Centric: Our clients' needs drive everything we do, and we tailor our solutions to their goals.
                    Empowerment: Our solutions empower clients to harness the potential of technology and achieve their ambitions.

                </p>


            </div>
            <div className='divider' ></div>
            <div className="contact-info">
                <h3 className="contact-title">Contact Us</h3>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />

                    <span className="contact-text">12 Baltimore St,<br />St.John’s , NL, Canada(A1B 3P9 )</span>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span className="contact-text">Phone: +1(709)693-9434</span>
                </div>
                <div className="contact-items ">
                    <FaMapMarkerAlt className="contact-icon" />

                    <span className="contact-text">12 floor office no 1201,<br />Green trust tower,F6/1 Islamabad</span>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span className="contact-text">Phone: +92 3357944011</span>
                </div>
                <div className='divider' ></div>
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span className="contact-text">Email: info@zengur.com</span>
                </div>
                <span>Responce time with in one day!</span>
            </div>
        </div>
    )
}

export default Index
