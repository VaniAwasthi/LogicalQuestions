import React, { Fragment, useState } from "react";

const RepeatedNumber =()=>{
    const[getNumber,setNumber]=useState();
    const[getDuplicate,setDuplicate]=useState()
 
    let randomNumbers = [1,2,3,6,8,9,22,11,40,23,23];
    function count_duplicate(a){
        let counts = {}
        for(let i =0; i < a.length; i++){ 
            if (counts[a[i]]){
            counts[a[i]] += 1
            } else {
            counts[a[i]] = 1
            }
           }  
           for (let prop in counts){
               if (counts[prop] >= 2){
                   setNumber(prop)
                   setDuplicate(counts[prop])
               }
           }
         console.log(counts)
       }
       
    return(
        <Fragment>
           
            <div style={{backgroundColor:'black',color:'white',width:'200px',padding:'20px 10px', margin:"20px"}}>
            <button onClick={()=>count_duplicate(randomNumbers)}>Duplicate Number</button>
            <p> let randomNumbers = [1,2,3,6,8,9,22,11,40,23,23]</p>
            <p>{getNumber} counted : {getDuplicate} times</p>
                </div>
               
        </Fragment>
    )

}
export default RepeatedNumber