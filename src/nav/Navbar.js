import React from 'react'
import './navbar.css'
import Footer from '../footer/Footer'
import About from '../aboutMe/about';
import Experience from '../experience/experience';
import Projects from '../projects/Projects';
import Contact from '../contactMe/ContactMe';
import { useState, useEffect } from 'react'

export default function Navbar( val ) {
    let dropStyle = {};
    const [toggle,setToggle] = useState(0)
    const toggler = () => {
        toggle ? setToggle(0) : setToggle(1)
    }
    if(toggle === 0)
        dropStyle = { display: 'none' }
    else
        dropStyle = { display: 'flex' };

    let dropHam = {};
    const [hamToggle,setHamToggle] = useState(0)
    const hamToggler = () => {
        hamToggle ? setHamToggle(0) : setHamToggle(1)
    }
    if(hamToggle === 0)
        dropHam = { display: 'none' }
    else
        dropHam = { display: 'flex', width: '100%', marginLeft: '0px' };
     
    const [windowDimenion, detectHW] = useState(window.innerWidth)   
    const detectSize = () => { detectHW(window.innerWidth) }  
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    if(windowDimenion > 1000)
        dropHam = { display: 'none' }
    else
        dropStyle = { display: 'none' }
    
    const [popUp, setTogglePopUp] = useState(0)

    const popUpToggler = () => {
        popUp ? setTogglePopUp(0) : setTogglePopUp(1);
    }

    let displayForm = {};

    if(popUp)
        displayForm = { display: 'block' }

    const hamPopUpToggler = () => {
        popUp ? setTogglePopUp(0) : setTogglePopUp(1);
        hamToggle ? setHamToggle(0) : setHamToggle(0);
    }

    const [displayProjects, getDisplayProjects] = useState(0)
    const toggleProjects = () => {
        displayProjects ? getDisplayProjects(0) : getDisplayProjects(1)
    }
    const toggleHamProjects = () => {
        displayProjects ? getDisplayProjects(0) : getDisplayProjects(1)
        hamToggle ? setHamToggle(0) : setHamToggle(0);
    }
    let showProjects = {};
    if(displayProjects){
        showProjects = { display: 'flex' }
    }

    return (
        <div>
            <div className='navbar'>
                <p className='name'>Welcome aboard {val.name}!</p>
                <a onClick={hamToggler} className="ham-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <ul style={dropHam} className='ham-drop-links'>
                    <li><a onClick={hamToggler} href="#About">About me</a></li>
                    <li><a onClick={toggleHamProjects} href="#Projects">Projects</a></li>
                    <li><a onClick={hamToggler} href="#Education">Education</a></li>
                    <li><a onClick={hamToggler} href="#Experience">Experience</a></li>
                    <li><a onClick={hamToggler} href="#Skills">Skills</a></li>
                    <li><a onClick={hamToggler} href="#Social">Social media</a></li>
                    <li><a onClick={hamPopUpToggler}>Contact me</a></li>
                </ul>
                <div className='mode'>
                    <ul className='links'>
                        <li><a href="#About">About me</a></li>
                        <li onClick={toggler}><a>Experience<i className="arrow"></i></a></li>
                        <li><a href="#Social">Social media</a></li>
                        <li><a onClick={toggleProjects} href="#Projects">Projects</a></li>
                        <li onClick={popUpToggler}><a>Contact me</a></li>
                    </ul>
                </div>
            </div>
            <div className='drop-nav-div' style={dropStyle}>
                <div>Placeholder</div>
                <ul className='drop-links'>
                    <li><a onClick={toggler} href="#Education">Education</a></li>
                    <li><a onClick={toggler} href="#Experience">Experience</a></li>
                    <li><a onClick={toggler} href="#Skills">Skills</a></li>
                </ul>
            </div>
            <a name="About"></a>
            <Contact displayForm = {displayForm} popUpToggler = {popUpToggler} />
            <About />
            <Projects showProjects = {showProjects} />
            <Experience />
            <Footer />
        </div>
    )
}