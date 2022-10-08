import React from "react";
import { Link } from "react-router-dom";
import logo from './images/logo_check.png'

const Nav = () => {
    return (<>
        <section id="nav">
            <div className="logo">
                <img src={logo} alt="Stivers-Post" /> 
                <p>Stivers Post</p>
            </div>
            <div className="link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/internship">Internship</Link></li>
                <li><Link to="/Job">Job's</Link></li>
                <li><Link to="/contest">Contest's</Link></li>
                <li><Link to="/hackthon">Hackthon</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </div>
        </section>
    </>)
}

export default Nav;