import React, { Fragment } from 'react'
import './Index.css'
import logo from '../assets/Images/zengurlogo.jpeg'
//icon 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const Index = () => {
    return (
        <Fragment>
            {/* <footer id="fh5co-footer" role="contentinfo">
                <div class="container">
                    <div class="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0 text">
                        <h3>About Us</h3>
                        <p className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <p><a href="#" class="btn btn-primary btn-outline with-arrow btn-sm">Go to Top <i class="icon-arrow-right"></i></a></p>
                    </div>
                    <div class="col-md-4 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0 text">
                        <h3>Our Services</h3>
                        <ul class="float text">
                            <li><a href="#">Website Building</a></li>
                            <li><a href="#">website &amp; designing </a></li>
                            <li><a href="#">Microsoft 365 service</a></li>
                            <li><a href="#">laicenceing</a></li>
                        </ul>
                    </div>
                 
                    <div class="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0 text">
                        <h3>Follow Us</h3>
                        <ul class="float socailicon">
                            <li><a href="#"><FacebookOutlinedIcon /></a></li>
                            <li className='mx-2'><a href="#"><TwitterIcon /></a></li>
                            <li><a href="#"><InstagramIcon /></a></li>
                        </ul>
                    </div>
                    <div class="col-md-12 fh5co-copyright text-center text-white">
                        <p>&copy; 2023 InfeetInc. All Rights Reserved. </p>
                    </div>

                </div>
            </footer> */}
            <footer id="fh5co-footer" role="contentinfo">
                {/* <div className="container text">
                    <div className=" abuotusclass text">
                        <h3>What We Do</h3>
                        <p className='text-white'>Zengure is a multinational website Builder fractionalization firm that  aims to create website for your busniess </p>
                        <p><a href="#" className="btn btn-primary btn-outline with-arrow btn-sm"><ArrowCircleUpIcon fontSize='large' /> </a></p>
                    </div>
                    <div className="">
                        <h3>Our Services</h3>
                        <ul className="float">

                            <li><a href="#">Website Building</a></li>
                            <li><a href="#">website &amp; designing </a></li>
                            <li><a href="#">Microsoft 365 service</a></li>
                            <li><a href="#">laicenceing</a></li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className='followus-text'>Follow Us</h3>
                        <ul className="socailicon">
                            <li ><a href="#"><FacebookOutlinedIcon fontSize='large' /></a></li>
                            <li ><a href="#"><TwitterIcon fontSize='large' /></a></li>
                            <li><a href="#"><InstagramIcon fontSize='large' /></a></li>
                            <li><a href="#"><LinkedInIcon fontSize='large' /></a></li>

                        </ul>
                    </div>


                </div> */}
                <div className="col-md-12 fh5co-copyright text-center text-white">
                    <p>&copy; 2019 Powered By Zengur </p>
                    <img className="logo-img " src={logo} alt='' />
                </div>
            </footer>
        </Fragment>
    )
}

export default Index