import React from 'react'
import './navbar.css'
import Footer from '../footer/Footer'
import About from '../aboutMe/about';
import Experience from '../experience/experience';
import './contact.css'
import { useState, useEffect, useRef } from 'react'

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

    return (
        <div>
            <div className='navbar'>
                <p className='name'>Welcome aboard {val.name}!</p>
                <a onClick={hamToggler} href="javascript:void();" class="ham-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <ul style={dropHam} className='drop-links'>
                    <li><a onClick={hamToggler} href="#About">About me</a></li>
                    <li><a onClick={hamToggler} href="#Education">Education</a></li>
                    <li><a onClick={hamToggler} href="#Experience">Experience</a></li>
                    <li><a onClick={hamToggler} href="#Skills">Skills</a></li>
                    <li><a onClick={hamToggler} href="#Social">Social media</a></li>
                    <li><a onClick={hamPopUpToggler}>Contact me</a></li>
                </ul>
                <div className='mode'>
                    <ul className='links'>
                        <li><a href="#About">About me</a></li>
                        <li onClick={toggler}><a href="javascript:void(0);">Experience<i className="arrow"></i></a></li>
                        <li><a href="#Social">Social media</a></li>
                        <li onClick={popUpToggler}><a href="javascript:void();">Contact me</a></li>
                    </ul>
                </div>
            </div>
            <ul style={dropStyle} className='drop-links'>
                <li><a onClick={toggler} href="#Education">Education</a></li>
                <li><a onClick={toggler} href="#Experience">Experience</a></li>
                <li><a onClick={toggler} href="#Skills">Skills</a></li>
            </ul>
            <a name="About"></a>
            {/*Pop up form*/}
            <div style={displayForm} className='contact' id='close'>
                <form className='contactForm'>
                    <span onClick={popUpToggler} id="exit">&#10005;</span>
                    <p>Contact me for info...</p>
                    <input type="text" placeholder='First name'></input><input type="text" placeholder='Last name'></input><br></br><br></br>
                    <input type="text" placeholder='Phone'></input><input type="email" placeholder='E-mail'></input><br></br><br></br>
                    <textarea rows={6} placeholder='Write your message...' /><br></br><br></br>
                    <button onClick={popUpToggler}>Send</button>
                </form>
            </div>
            <About />
            <Experience />
            <Footer />
        </div>
    )
}