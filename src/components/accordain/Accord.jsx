import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from "./data";
import "./style.css";

function Accord() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    setMultiple(prevMultiple => {
      if (prevMultiple.includes(currentId)) {
        return prevMultiple.filter(id => id !== currentId);
      } else {
        return [...prevMultiple, currentId];
      }
    });
  }

  function toggleMultiSelection() {
    setEnableMultiSelection(prevState => !prevState);
    setSelected(null); 
    setMultiple([]);  
  }

  return (
    <>
      <h1>Accordion Project</h1>
      <div className='container accord'>
        <Link to={"/"}> <button className='home-btn'>◀ Home</button></Link>
        <div className='wrapper'>
          <div className='accordian-box'>
            <button className='multi-selec' onClick={toggleMultiSelection}>
              {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
            </button>
            {data.length > 0 ? (
              data.map((item, index) => {
                const isItemSelected = enableMultiSelection ? multiple.includes(item.id): selected === item.id;
                return (
                  <div className='item' key={item.id}>
                    <div
                      className='title'
                      onClick={() =>
                        enableMultiSelection
                          ? handleMultiSelection(item.id)
                          : handleSingleSelection(item.id)
                      }
                    >
                      <h4>{index + 1}# {item.question}</h4>
                      <span>+</span>
                    </div>
                    {isItemSelected && <h6 className='ans'>{item.answer}</h6>}
                  </div>
                );
              })
            ) : (
              <div>Data Not Found !!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accord;
