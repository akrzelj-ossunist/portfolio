import './about.css'
import logo from './profile.jpg';
import wave from './wave.png';
import location from './location-pin.png'
import bday from './cake.png'
import call from './phone-call.png'

function About() {
  return (
    <div className='about'>
        <div>
            <img className='profile' src={logo} width={250}></img>
        </div>
        <div className='txtAbout'>
            <div className='txt'>
                <div className='fixNav'>
                    <h1>Hello!<img src={wave} width={27}></img></h1>
                </div>
                <p>Passionate programmer with solid knowledge in programming while always ready to get better and learn more.</p>     
            </div>
            <div className='pins'>
                <img src={location} width={27} height={30}></img><p>Domovinskog rate 54,Podstrana, 21212</p>
                <img className='bdayimg' src={bday} width={27} height={30}></img><p>16.01.1999</p>
                <img className='bdayimg' src={call} width={27} height={30}></img><p>+38558769555</p>
            </div>
        </div>
    </div>
  )
};
export default About;