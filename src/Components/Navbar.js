import React from 'react'
import "./Navbar.css"
import Logo from "../Assets/Logo.png"
import { slide as Menu } from 'react-burger-menu'
export default function Navbar() {
    return (
        <div className='navbar'>
            <div>
                <img className='logo' src={Logo} alt="logo" />
            </div>
            <div>
                <ul className='li'>
                    <li>Domains</li>
                    <li>Courses</li>
                    <li>Internship</li>
                    <li>Magazine</li>
                    <li>Campus</li>
                    <li>Hiring</li>
                    <li>Industry</li>
                    <li>Team</li>
                </ul>
            </div>
        </div>
    )
}
