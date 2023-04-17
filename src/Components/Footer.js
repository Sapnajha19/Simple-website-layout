import React from 'react'
import "./Footer.css"
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
// import {BsDiscord} from "react-icons/ai";
// import {FaTelegramPlane} from "react-icons/ai";
export default function Footer() {
    return (
        <div className='footer'>
            <div className='content'>
                <div className='upperhalf'>
                    <div className='about-us'>
                        <div>About Us</div>
                        <div className='about-items'>
                            <div className='sentence'>engineerHUB is INDIA's largest community of engineers</div>
                            <div className='sentence'>where students(alumni) from IITs, NITs, IIITs and state</div>
                            <div className='sentence'>colleges join together to develop and nurture students</div>
                            <div className='sentence'>skills coming from all over India. .</div>
                        </div>
                    </div>
                    {/* <div className='vertical-line'></div> */}
                    <div className='links'>
                        <div>Links</div>
                        <div className='link-items'>
                            <div>Magazines</div>
                            <div>Courses</div>
                            <div>Events</div>
                        </div>
                    </div>
                    {/* <div className='vertical-line'></div> */}
                    <div className='contact-us'>
                        <div>Contact Us</div>
                        <div className='contact-items'>
                            <div>info@engineerhub.in</div>
                            <div className='icons'>
                                <div><AiOutlineInstagram className='icon' /></div>
                                <div><AiFillLinkedin className='icon' /></div>
                                <div><AiOutlineTwitter className='icon' /></div>
                                {/* <div><BsDiscord/></div> */}
                                {/* <div><FaTelegramPlane/></div> */}
                            </div>
                            <div className='button'>
                                <div><button className='btn'>Log in</button></div>
                                <div><button className='btn'>Register</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lowerhalf'>
                    <div className='line'></div>
                    <div className='lowerhalf-content'>
                    <div>Powered by</div>
                    <div className='logo-name'>engineerHUB</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
