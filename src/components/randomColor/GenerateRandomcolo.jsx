import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function GenerateRandomcolo() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState('hex');

  //Returns a random integer between 0 and length - 1.
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; //Declares an array hex containing possible HEX digits.
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  }

  return (
    <>
      <h1>Generate Random Color Project</h1>
      <hr />
      <div className='container generate-random-colo'>
        <Link to={"/"}><button className='home-btn'>◀ Home</button></Link>

        <div className='box'>
          <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
          <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Create Random Color</button>
          <button onClick={() => setTypeOfColor("hex")}>Create HEX Color </button>
        </div>
        
        <div className='colored-box' style={{ backgroundColor: color }}>
            <h1>{typeOfColor}</h1>
            <h2>
                {color}
            </h2>
        </div>
      </div>
    </>
  );
}

export default GenerateRandomcolo;
