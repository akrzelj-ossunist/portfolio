import './contact.css'

export default function Contact( {displayForm, popUpToggler} ){

    return(
    <div style={displayForm} className='contact' id='close'>
        <form className='contactForm'>
            <span onClick={popUpToggler} id="exit">&#10005;</span>
            <p>Contact me for info...</p>
            <input type="text" placeholder='First name'></input><input type="text" placeholder='Last name'></input><br></br><br></br>
            <input type="text" placeholder='Phone'></input><input type="email" placeholder='E-mail'></input><br></br><br></br>
            <textarea rows={6} placeholder='Write your message...' /><br></br><br></br>
            <button className='button' onClick={popUpToggler}>Send</button>
        </form>
    </div>
    )
}