import React, { useState,useEffect } from "react";
import background from '../assert/Background  (1).png';
function Currentweather({city}) {
    // console.log("hello",city);
  return (
     <div>
        <div>  
          {/* <img src={background}/> */}        
           <h5 className="card-title" style={{ fontSize: '15px', display: 'inline-block' }}>          
             {Currentweather.data}
          </h5> 
          <h2>current</h2>      
   </div>
         </div>
        
  );
}


 export default Currentweather;

 