import { Link } from "react-router-dom"
function ImageSlider() {
  return (
    <>
    <h1>Image Slider Project</h1>
    <hr />
       <div className='container accord'>
         <Link to={"/"}> <button className='home-btn'>◀ Home</button></Link>
    </div>
  </>
  )
}

export default ImageSlider