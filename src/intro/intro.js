import React from 'react'
import './form.css'
import { useState } from 'react'
import App from '../App'

export default function Start() {
    const [val,getName] = useState('')
    const [valButton,getButtonVal] = useState('')
    let valName = val.charAt(0).toUpperCase() + val.slice(1,val.length);
    if(valButton == 'Continue'){
        if(valName == '')
            valName = 'Guest'
        return ( <App name={valName}/> )
    }
    const myStyle={
        backgroundImage: "url('https://pixahive.com/wp-content/uploads/2021/03/purple-black-background-368142-pixahive-1024x576.jpg')",
        height:'100vh',
    };
    return (
    <div className='container' style={myStyle}>
        <h1 className='welcome'>Welcome</h1>
        <div className='form-center'>
            <form className='form'>
                <span className='user'>Username</span>
                <br></br><input className='text' onInput={e => getName(e.target.value)} type="text"></input>
                <br></br><br></br><input className='button' type="submit" value="Continue"  onClick={e => getButtonVal(e.target.value)} ></input>
            </form>
        </div>
    </div>
    )
}
