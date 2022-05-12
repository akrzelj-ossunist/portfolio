import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <p>© 2022 Antonio Krželj</p>
        <div>
          <a href="mailto:ak48392@unist.hr"><img src="https://github.com/akrzelj-ossunist/Web_str-js/blob/main/Vjezba_2/email.png?raw=true" width={35}></img></a>
          <a href="https://github.com/akrzelj-ossunist"><img src="https://raw.githubusercontent.com/akrzelj-ossunist/Web_str-js/main/Vjezba_2/git.png" width={27}></img></a>
          <a href="http://linkedin.com/in/antonio-krzelj-825118231/"><img src="https://raw.githubusercontent.com/akrzelj-ossunist/Web_str-js/main/Vjezba_2/li.png" width={27}></img></a>
        </div>
    </div>
  )
};
export default Footer;