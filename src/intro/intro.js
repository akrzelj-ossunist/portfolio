import React from 'react'
import './form.css'
import { useState } from 'react'
import App from '../App'

export default function Start() {
    const [val,getName] = useState('')
    const [valButton,getButtonVal] = useState('')
    let valName = val.charAt(0).toUpperCase() + val.slice(1,val.length);

    if(valButton === 'Continue'){
        if(valName === '')
            valName = 'Guest'
        return <App name={valName}/>
    }

    return (
    <div className='main'>
        <form className='form'>
            <div id='formId'>
                <label>Username: </label>
                <input type='text' onInput={el => getName(el.target.value)} placeholder='Username'></input>
            </div>
            <button type='button' value='Continue' onClick={el => getButtonVal(el.target.value)} >Continue</button>
        </form>
        <h1>Welcome to my personal website!</h1>
    </div>
    )
}
