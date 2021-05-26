import React, { Fragment, useState } from "react";

const EvenNumbers =()=>{
   const[evenNum,setEvenNum]=useState([])
    let randomNumbers = [1,2,3,6,8,9,22,11,40,23];
    function getEvenNumbers() {
    var evens = randomNumbers.filter(number => number % 2 === 0);
       setEvenNum( evens);
    }
    return(
        <Fragment>
           
            <div style={{backgroundColor:'black',color:'white',width:'200px',padding:'20px 10px', margin:"20px"}}>
            <button onClick={getEvenNumbers}>Print Even Numbers</button>
            <h3>Even Numbers</h3>
                {evenNum && evenNum.map((num,i)=>(
                   <div  key={i}>
                       {num}
                   </div> 
                ))}
                </div>
               
        </Fragment>
    )

}
export default EvenNumbers