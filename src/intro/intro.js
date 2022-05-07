import React from 'react'
import './form.css'
import { useState } from 'react'
import App from '../App'
import bckg from './bckg.jpg'

export default function Start() {
    const [val,getName] = useState('')
    const [valButton,getButtonVal] = useState('')
    let valName = val.charAt(0).toUpperCase() + val.slice(1,val.length);
    if(valButton == 'Continue'){
        if(valName == '')
            valName = 'Guest'
        return ( <App name={valName}/> )
    }
    return (
    <div className='container'>
        <img src={bckg} width={1879}></img>
        <form className='form'>
            <span className='user'>Username</span>
            <br></br><input className='text' onInput={e => getName(e.target.value)} type="text"></input>
            <br></br><br></br><input className='button' type="button" value="Continue"  onClick={e => getButtonVal(e.target.value)} ></input>
        </form>
    </div>
    )
}
