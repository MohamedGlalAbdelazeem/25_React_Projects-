 import './App.css'
 import {  Routes ,Route} from 'react-router-dom';
import Homebtns from './Homebtns';
import Myroutes from './Myroutes';
 
function App() {
  return (
    <>
       <div className='icons'>
         <a href="https://github.com/MohamedGlalAbdelazeem" target="_blank" rel="noopener noreferrer">
           <i className="fa-brands fa-github"></i>
         </a>
         <a href="https://github.com/MohamedGlalAbdelazeem" target="_blank" rel="noopener noreferrer">
         <i className="fa-brands fa-linkedin"></i>
         </a>
         <a href="https://github.com/MohamedGlalAbdelazeem" target="_blank" rel="noopener noreferrer">
         <i class="fa-brands fa-youtube"></i>
         </a>
         <a href="https://github.com/MohamedGlalAbdelazeem" target="_blank" rel="noopener noreferrer">
         <i class="fa-brands fa-behance"></i>
         </a>
         <a href="https://github.com/MohamedGlalAbdelazeem" target="_blank" rel="noopener noreferrer">
         <i class="fa-solid fa-user"></i>
         </a>
       </div>
          <h1 className='main-title'>25 Projects with React Js <br /> By Eng Mohamed galal 😨</h1>
       <Routes>
          <Route path='/' element={<Homebtns/>}/>
       </Routes>
      <Myroutes/>
    </>
  )
}

export default App
