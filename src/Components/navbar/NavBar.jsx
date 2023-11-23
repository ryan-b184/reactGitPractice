
import './navbar.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";


export function NavBar() {

    //activeNav is the variable that is used
    //setActiveNav is the method that can be used to update activeNav
    const [activeNav, setActiveNav] = useState('#')

    

    return (
        <div className="nav__container">
            <nav>
                {/* 
                    onclick sets the new active nav 
                    className ternerary sets tag to "active" so css can update it
                */}
                <a href="#" title="Home" onClick={(() => setActiveNav('#'))} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
                <a href="#about" title="About Me" onClick={(() => setActiveNav('#about'))} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
                <a href="#experience" title="Experience" onClick={(() => setActiveNav('#experience'))} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
                <a href="#portfolio" title="Portfolio" onClick={(() => setActiveNav('#portfolio'))} className={activeNav === '#portfolio' ? 'active' : ''}><FaFolderOpen/></a>
                <a href="#contact" title="Contact Info" onClick={(() => setActiveNav('#contact'))} className={activeNav === '#contact' ? 'active' : ''}><BiSolidContact/></a>
            </nav>
        </div>
    )
}