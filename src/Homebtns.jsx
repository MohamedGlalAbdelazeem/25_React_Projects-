import React from 'react'
import { Link } from 'react-router-dom';
function Homebtns() {
  return (
   <>
      <div className='icons'>
      <a href="https://github.com/MohamedGlalAbdelazeem" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/mohamed-glal-abdelazeem/" target="_blank" rel="noopener noreferrer">
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
      <div className='main-btns'>
          <Link to={"/Accord"}>
              <button className='my-btn'>Accordian</button>
          </Link>
          <Link to={"/GenerateRandomcolo"}>
              <button className='my-btn'>Genetate Random Color</button>
          </Link>
          
      </div>
   </>
  )
}

export default Homebtns