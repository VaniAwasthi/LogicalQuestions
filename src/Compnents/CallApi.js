import React, { Fragment, useEffect, useState } from "react";

const CallApi = () =>{
    const[getData,setData]=useState()
    useEffect(()=>{
        fetch('www.example.com/api/get/1 ')
  .then(response =>{console.log(response);
    setData(response)
})
 
    },[])
    
return(
    <Fragment>
<div style={{backgroundColor:'black',color:'white',width:'200px',margin:'20px 20px'}}>
    <p>Printing Api status Text</p>
  <p>{getData?.statusText}</p> 
</div>
        </Fragment>
)
}
export default CallApi