import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"
import { useState } from "react";
import "./star.css";




function StarRating({noOfStart = 5}) {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMousEnter(getCurrentIndex) {
   setHover(getCurrentIndex);
  }

  function handleMousLeave() {
   setHover(rating);
  }
  return (
    <>
    <h1>Star Rating Project</h1>
    <hr />
       <div className='container accord'>
         <Link to={"/"}> <button className='home-btn'>◀ Home</button></Link>
         <div className="image">
          <img src="https://images.anyrecover.com/anyrecoveren/assets/article/free-office-365-product-key.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus inventore quasi corrupti officiis provident alias suscipit dignissimos similique. Voluptates debitis eaque illum, quia corporis commodi! Consectetur nemo veniam magnam doloribus?</p>
         </div>
       <div className="star-rating">
        {
          [...Array(noOfStart)].map((_,index)=>{
            index+=1;
            return (
              <FaStar 
                  className={index <= (rating || hover) ?  'active' : 'inactive'}
                  key={index}
                  onClick={()=>handleClick(index)}
                  onMouseMove={()=>handleMousEnter(index)}
                  onMouseLeave={()=>handleMousLeave()}/>
            )})}
       </div>
    </div>
  </>
  )
}

export default StarRating