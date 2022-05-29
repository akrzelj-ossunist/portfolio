import Navbar from './nav/Navbar'
import './app.css'

function App( val ) {
  return (
    <div>
        <Navbar name={val.name}/>
    </div>
  )
};
export default App;
