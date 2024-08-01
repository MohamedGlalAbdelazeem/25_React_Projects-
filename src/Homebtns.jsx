import React from 'react'
import { Link } from 'react-router-dom';
function Homebtns() {
  return (
    <div className='main-btns'>
        <Link to={"/Accord"}>
            <button className='my-btn'>Accordian</button>
        </Link>
        
        
    </div>
  )
}

export default Homebtns