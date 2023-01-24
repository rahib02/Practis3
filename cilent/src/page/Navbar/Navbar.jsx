import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    return (
        <div className='navbar'>
            <Link to={"/"}><img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="" /></Link>
            <div className='ul'>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"add"}>Add</Link></li>
                </ul>
            </div>
            <input type="text" className='search_input' placeholder='Search ' />
        </div>
    )
}

export default Navbar