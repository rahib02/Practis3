import React from 'react'
import './Footer.css'
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer'>
            <p>Copyright ©2023 All rights reserved | This template is made with<AiFillHeart />by<Link className='footer_link'>Colorlib</Link> </p>
        </div>
    )
}

export default Footer