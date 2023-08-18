import React, { Fragment, useState, useRef, useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/Images/zengurlogo.jpeg'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
    Container,
    FormControl,
    Input,
    createTheme,
    ThemeProvider,
    Button,
    FormLabel,
    Typography,
    Box,
    Link,
    Divider,
} from "@mui/material";

import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import "./Index.css";
import emailjs from "@emailjs/browser";
import { pink } from "@mui/material/colors";
import Navbar from '../Navbar/Index';
const Index = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm('service_nr4xwne', 'template_d1wie65', form, 'PVWGOu1RVCawNzxBv')
            .then((response) => {



                console.log('Email sent successfully:', response);
                alert("Email sent successfully")
                setFormData({ message: "", email: "", name: "" })


            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    return (
        <div className="abt-pg">

            <div className='contacts' id='contact'>

                <form
                    onSubmit={handleSubmit}
                    action=""
                    method="post"
                    className="form"
                    maxWidth="100%"
                >
                    <FormLabel>
                        <Typography
                            variant="h6"
                            component="h1"
                            color="black"
                            sx={{
                                fontSize: "25px",
                                width: "250px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: '-80px',
                                marginBottom: '-20px'


                            }}
                        >
                            GET IN TOUCH
                        </Typography>

                    </FormLabel>
                    <FormControl
                        color="primary"
                        className='input-contact'
                        variant="standard"
                        sx={{
                            margin: "6px 0px",
                            padding: "2px 4px",
                        }}
                        focused
                    >
                        <Input
                            className='input-contact'
                            onChange={handleChange}
                            name="name"
                            sx={{
                                margin: "10px 0px",
                                fontSize: "16px",
                                color: "black",
                                padding: "2px 5px",
                            }}
                            type="text"
                            startAdornment={
                                <EmailIcon

                                />
                            }
                            placeholder="Your Name..."
                            required
                        />
                    </FormControl>
                    <FormControl
                        color="primary"
                        className='input-contact'
                        variant="standard"
                        sx={{
                            margin: "6px 0px",
                            padding: "2px 4px",
                        }}
                        focused
                    >
                        <Input
                            className='input-contact'
                            onChange={handleChange}
                            name="email"
                            sx={{
                                margin: "10px 0px",
                                fontSize: "16px",
                                color: "black",
                                padding: "2px 5px",
                            }}
                            type="email"
                            startAdornment={
                                <EmailIcon

                                />
                            }
                            placeholder="Email"
                            required
                        />
                    </FormControl>
                    <FormControl
                        color="primary"
                        variant="standard"

                        className='input-contact'
                        sx={{
                            // width: "50%",
                            color: "black",
                            margin: "10px 0px",
                            padding: "2px 4px",
                        }}
                        focused
                    >
                        <Input
                            className='input-contact'
                            onChange={handleChange}
                            name="message"
                            sx={{
                                margin: "10px 0px",
                                // width: "50%",
                                fontSize: "16px",
                                color: "black",

                                padding: "2px 5px",
                            }}
                            type="text"
                            startAdornment={
                                <MessageIcon

                                />
                            }
                            placeholder="Enter your message"
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{
                                width: "110px",
                                marginBottom: '10px'
                            }}
                        >
                            Send &nbsp;{<SendIcon />}
                        </Button>
                    </FormControl>
                </form>
                <div>
                    <div className='card-contact'>
                        {/* <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon"> <LocationOnIcon />	</span>
                                <span className="elementor-icon-list-text">12 Baltimore St,<br /> <span className='text-add'>St.John’s , NL,</span><br /> <span className='text-add'>  Canada(A1B 3P9 )</span> </span>
                            </li>
                            <li className="elementor-icon-list-item">
                                <a href="tel:+923317750412">

                                    <span className="elementor-icon-list-icon">
                                        <WhatsAppIcon />					</span>
                                    <span className="elementor-icon-list-text">
                                        <a className="contact_event_btn" href="https://api.whatsapp.com/send?phone=+1(709)693-9434&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20zengur%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!"> +1(709)693-9434</a>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <Divider className='divid' />
                        <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                    <LocationOnIcon />	</span>
                                <span className="elementor-icon-list-text">12 floor office no 1201,<br /> <span className='text-add'>Green trust tower,</span><br /> <span className='text-add'>F6/1 Islamabad</span> </span>
                            </li>
                            <li className="elementor-icon-list-item">
                                <a href="tel:+923317750412">

                                    <span >
                                        <WhatsAppIcon className="elementor-icon-list-icon" />					</span>
                                    <span className="elementor-icon-list-text">
                                        <a className="contact_event_btn" href="https://api.whatsapp.com/send?phone=+923357944011&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20zengur%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!">+92 3357944011</a>
                                    </span>
                                </a>
                            </li>
                        </ul> */}
                        <div className="contact-itemes">
                            <LocationOnIcon />

                            <span className="contact-text">12 Baltimore St,<br />St.John’s , NL, <br />Canada(A1B 3P9 )</span>
                        </div>
                        <div className="contact-itemes">
                            <a className="" href="https://api.whatsapp.com/send?phone=+1(709)693-9434&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20zengur%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!">  <WhatsAppIcon /></a>
                            <a className="contact_event_btn" href="https://api.whatsapp.com/send?phone=+1(709)693-9434&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20zengur%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!"> +1(709)693-9434</a>


                        </div>
                        <div className='divider' ></div>
                        <div className="contact-itemes ">
                            <LocationOnIcon />

                            <span className="contact-text">12 floor office no 1201,<br />Green trust tower,F6/1<br /> Islamabad Pakistan</span>
                        </div>
                        <div className="contact-itemes">
                            <a className="" href="https://api.whatsapp.com/send?phone=+923357944011&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20zengur%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!"><WhatsAppIcon /></a>
                            <a className="contact_event_btn" href="https://api.whatsapp.com/send?phone=+923357944011&amp;text=Hi%2C%20I%E2%80%99m%20interested%20in%20zengur%20kindly%20send%20me%20more%20information%20about%20the%20project%2C%20pricing%20and%20availability.%20Thank%20you!">+92 3357944011</a>

                        </div>

                    </div>

                </div>

                {/* <div>
                    <div style={{ zIndex: "3", position: "absolute", height:" 100%", width: "100%", padding: "0px", borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y'}}>
                    <div style={{zIndex: 4, position: "absolute", left: '50%', top: '50%', width: '100%', willChange: "transform", transform: 'translate(0px, 0px)'}}>
                        <div style={{position: "absolute", left: '0px', top: '0px', zIndex: '104', width: '100%'}}>
                            </div>
                            <div style={{position: 'absolute', left: '0px', top: '0px' ,zIndex: '105', width: '100%'}}>
                                </div>
                                <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: '106', width: '100%'}}>
                        <span id="F66B5308-1A80-4A8E-8E29-19C9C2F31E95" style={{display: "none"}}>To navigate, press the arrow keys.</span>
                    </div>
                        <div style={{position: "absolute", left: '0px', top: '0px', zIndex: '107', width: '100%'}}>
                        </div>
                    </div>
                </div>
            </div> */}

            </div>
            <div className="follow-us"> <h2>Follow Us</h2>

            </div>
            <ul className=" socailicon">
                {/* <li><a href="#"><FacebookOutlinedIcon /></a></li> */}
                <li className='mx-2'><a href="#"><TwitterIcon /></a></li>
                <li className='mx-2'><a href="#"><InstagramIcon /></a></li>
                <li className='mx-2'><a href="#"><EmailIcon /></a></li>
                <li className='mx-2'><a href="#"><LinkedInIcon /></a></li>
            </ul>
            <div className="col-md-12 fh5co-copyright text-center ">
                <p>&copy; 2019 Powered By Zengur </p>
                <img className="logo-img " src={logo} alt='' />
            </div>
        </div >

    )
}

export default Index