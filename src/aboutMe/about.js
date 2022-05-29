import './about.css'
import logo from './img/profile.jpg';
import wave from './img/wave.png';
import location from './img/location-pin.png'
import bday from './img/cake.png'
import call from './img/phone-call.png'

function About() {
  return (
    <div href="javascript:void(0);" className='about'>
        <div className='pic'>
            <img className='profile' src={logo} width={250}></img>
        </div>
        <div className='txtAbout'>
            <div className='txt'>
                <div className='fixNav'>
                    <h1>Hello!<img src={wave} width={27}></img></h1>
                </div>
                <div>
                    <p>Antonio Krželj,</p>
                    <p>passionate programmer with solid knowledge in programming while always ready to get better and learn more.</p>     
                </div>
            </div>
            <div className='pins'>
                <img className='bdayimg' src={location} width={27} height={30}></img><p>Domovinskog rate 54,Podstrana, 21212</p>
                <img className='bdayimg' src={bday} width={27} height={30}></img><p>16.01.1999</p>
                <img className='bdayimg' src={call} width={27} height={30}></img><a href='tel:+385958769555'>+385958769555</a>
            </div>
        </div>
    </div>
  )
};
export default About;