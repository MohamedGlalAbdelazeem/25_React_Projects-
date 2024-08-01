 import './App.css'
 import {  Routes ,Route} from 'react-router-dom';
import Homebtns from './Homebtns';
import Myroutes from './Myroutes';
 
function App() {
  return (
    <>

       <Routes>
          <Route path='/' element={<Homebtns/>}/>
       </Routes>
      <Myroutes/>
    </>
  )
}

export default App
