import React from 'react'
import {  Routes ,Route} from 'react-router-dom';
import Accord from "./components/accordain/Accord"
function Myroutes() {
  return (
    <>
      <Routes>
         <Route  path='accord' element={<Accord/>}/>
      </Routes>
    </>
  )
}

export default Myroutes