import { useState } from 'react'
import './contact.css'

export default function Contact( {displayForm, popUpToggler} ){
    const [btn, btnToggle] = useState(0)
    const btnTogglerON = () => {
        btnToggle(1)
    }
    const btnTogglerOFF = () => {
        btnToggle(0)
    }
    const emptyFormObj = { fname: '', lname: '', phone: '', email: '', info: '' }

    const [formObj, getFormObj] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        info: ''
    })

    let errors = { fname: '', lname: '', phone: '', email: '' }

    const ValidateEmail = email =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            return true
        else
            return false
    }

    if(formObj['fname'].length > 10)
        errors.fname = 'To long first name!'
    if(formObj['lname'].length > 10)
        errors.lname = 'To long last name!'
    if(formObj['phone'].length > 14)
        errors.phone = "To long number!"
    if(!ValidateEmail(formObj['email']) && formObj['email'].length > 0)
        errors.email = "Incorect email!"

    if(btn){
        let cnt = 0;
        for(let i in errors)
            if(errors[i])
                cnt+=1;
        if(!cnt){
            popUpToggler()
            btnTogglerOFF()
            getFormObj(emptyFormObj)
        }
        else
            btnTogglerOFF()
    }

    return(
    <div style={displayForm} className='contact'>
        <form className='contactForm'>
            <span onClick={popUpToggler} id="exit">&#10005;</span>
            <p>Contact me for info...</p>
            <div className='blockDiv'>
                <div>
                    <input value={formObj.fname} onInput={el => getFormObj({...formObj, fname: el.target.value})} type="text" placeholder='First name'></input>
                    <label className='label'>{errors.fname}</label>    
                </div>
                <div>
                    <input value={formObj.lname} onInput={el => getFormObj({...formObj, lname: el.target.value})} type="text" placeholder='Last name'></input>
                    <label className='label'>{errors.lname}</label>
                </div>
            </div>
            <div className='blockDiv'>
                <div>
                    <input value={formObj.phone} onInput={el => getFormObj({...formObj, phone: el.target.value})} type="text" placeholder='Phone'></input>
                    <label className='label'>{errors.phone}</label>
                </div>
                <div>
                    <input value={formObj.email} onInput={el => getFormObj({...formObj, email: el.target.value})} type="email" placeholder='E-mail'></input>
                    <label className='label'>{errors.email}</label>
                </div>
            </div>
            <textarea value={formObj.info} rows={6} placeholder='Write your message...' onInput={el => getFormObj({...formObj, info: el.target.value})} /><br></br><br></br>
            <button type='button' className='button' onClick={btnTogglerON}>Send</button>
        </form>
    </div>
    )
}