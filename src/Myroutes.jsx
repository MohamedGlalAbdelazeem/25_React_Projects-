import React from 'react'
import {  Routes ,Route} from 'react-router-dom';
import Accord from "./components/accordain/Accord"
import GenerateRandomcolo from './components/randomColor/GenerateRandomcolo';
function Myroutes() {
  return (
    <>
      <Routes>
         <Route  path='accord' element={<Accord/>}/>
         <Route  path='generateRandomcolo' element={<GenerateRandomcolo/>}/>
      </Routes>
    </>
  )
}

export default Myroutes