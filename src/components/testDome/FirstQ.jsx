// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React, { useState } from 'react';

const FirstQ = () => {
    const [render, setRender] = useState(false);
    return (
        <div>
            <a onClick={()=>{setRender(!render)}} href="#">Want to buy a new car?</a>
           {render &&  <p>Call +11 22 33 44 now!</p>}
        </div>
    );
};

// export default FirstQ;
// class Message extends React.Component {
//     render() {
      
//   }
  
// class FirstQ extends React.Component{
//     render() {

//     }
// }

// document.body.innerHTML = "<div id="root"> </div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<FirstQ/>, rootElement);

//   document.body.innerHTML = "<div id='root'> </div>";
    
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<Message />, rootElement);
  
//   console.log("Before click: " + rootElement.innerHTML);
//   document.querySelector("a").click();
//   console.log("After click: " + rootElement.innerHTML);