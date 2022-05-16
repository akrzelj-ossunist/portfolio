import Navbar from './nav/Navbar'
import Footer from './footer/Footer'
import About from './aboutMe/about';
import Experience from './experience/experience';
import './app.css'

function App( val ) {
  return (
    <div>
        <Navbar name={val.name}/>
        <About />
        <Experience />
        <Footer />
    </div>
  )
};
export default App;
