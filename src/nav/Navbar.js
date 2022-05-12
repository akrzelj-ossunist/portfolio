import React from 'react'
import './navbar.css'
import { useState } from 'react'

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

    return (
        <>
            <div className='navbar'>
                <p className='name'>Welcome aboard {val.name}!</p>
                <ul className='links'>
                    <li><a href="#">About me</a></li>
                    <li onClick={toggler}><a href="javascript:void(0);">Expirience<i className="arrow"></i></a></li>
                    <li><a href="Social">Social media</a></li>
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