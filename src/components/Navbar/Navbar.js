import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {

    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <GiHamburgerMenu/>
            </label>
            <label className="logo">Store</label>
            <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a htmlFor="check" href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
