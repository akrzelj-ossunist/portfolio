import './footer.css'
import git from './imgs/github.png'
import linked from './imgs/linkedin.png'
import mail from './imgs/mail.png'

function Footer() {
  const gitStyle = { marginBottom: '-14px' }
  const linkedStyle = { marginBottom: '-13px', marginLeft: '-4px' }
  const divStyle = {
    display: 'flex',
    marginTop: '-10px'
  };
  return (
    <div className='footer'>
        <p>© 2022 Antonio Krželj</p>
        <div style={divStyle}>
          <p id='phoneHide'>Socials: </p>
          <a href="mailto:ak48392@unist.hr"><img src={mail} width={34}></img></a>
          <a href="https://github.com/akrzelj-ossunist"><img style={gitStyle} src={git} width={28}></img></a>
          <a href="http://linkedin.com/in/antonio-krzelj-825118231/"><img style={linkedStyle} src={linked} width={28}></img></a>
        </div>
    </div>
  )
};
export default Footer;