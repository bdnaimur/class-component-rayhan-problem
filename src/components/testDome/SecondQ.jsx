import React, { useState } from 'react';

const SecondQ = ({items}) => {
    const [ornageInitial , setOrangeInitial] = useState(0)
    const [bananInitial , setBananInitial] = useState(0)
    const handleOrangeIncreament = e =>{

    }
    const handleBananasIncreament = e =>{

    }
    const handleOrangeDecreament = e =>{

    }
    const handleBananasDecreament = e =>{

    }
    return (
        <ul>
        <li>
          <span>Oranges</span> - <span>votes: {ornageInitial}</span><button onClick={()=>{setOrangeInitial(ornageInitial + 1)}}>+</button> <button onClick={()=>{setOrangeInitial(ornageInitial + -1)}}>-</button>
        </li>
        <li>
          <span>Bananas</span> - <span>votes: {bananInitial}</span><button onClick={handleBananasIncreament}>+</button> <button onClick={handleBananasDecreament}>-</button>
        </li>
      </ul>
    )
    
    
};

export default SecondQ;