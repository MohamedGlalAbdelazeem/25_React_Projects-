import React from 'react'
import {  Routes ,Route} from 'react-router-dom';
import Accord from "./components/accordain/Accord"
import GenerateRandomcolo from './components/randomColor/GenerateRandomcolo';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
function Myroutes() {
  return (
    <>
      <Routes>
         <Route  path='accord' element={<Accord/>}/>
         <Route  path='generateRandomcolo' element={<GenerateRandomcolo/>}/>
         <Route  path='StarRating' element={<StarRating noOfStart={5} />}/>
         <Route  path='ImageSlider' element={<ImageSlider noOfStart={5} />}/>
      </Routes>
    </>
  )
}

export default Myroutes