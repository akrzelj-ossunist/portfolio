import React from 'react'
import './navbar.css'
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
     
    
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })   
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }  
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    if(windowDimenion.winWidth > 700)
        dropHam = { display: 'none' }
    else
        dropStyle = { display: 'none' }
        
    return (
        <>
            <div className='navbar'>
                <p className='name'>Welcome aboard {val.name}!</p>
                <a onClick={hamToggler} href="javascript:void();" class="ham-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <ul style={dropHam} className='drop-links'>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Expirience</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Social media</a></li>
                </ul>
                <ul className='links'>
                    <li><a href="#">About me</a></li>
                    <li onClick={toggler}><a href="javascript:void(0);">Expirience<i className="arrow"></i></a></li>
                    <li><a href="#">Social media</a></li>
                </ul>
            </div>
            <ul style={dropStyle} className='drop-links'>
                <li><a href="#">Education</a></li>
                <li><a href="#">Expirience</a></li>
                <li><a href="Social">Skills</a></li>
            </ul>
        </>
    )
}