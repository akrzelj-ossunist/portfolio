import Navbar from './nav/Navbar'
import Footer from './footer/Footer'
import About from './aboutMe/about';
import Expirience from './expirience/expirience';

function App( val ) {
  return (
    <div>
        <Navbar name={val.name}/>
        <About />
        <Expirience />
        <Footer />
    </div>
  )
};
export default App;
