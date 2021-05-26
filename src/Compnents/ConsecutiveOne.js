import React, { Fragment } from "react"

const ConsecutiveOne = () =>{
    const arr = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1];
    const findMaxConsecutiveOnes = (arr=[]) => {
       let left = 0;
       let right = 0;
       let max = 0;
       while (right < arr.length) {
          if (arr[right] === 0) {
             if (right - left > max) {
                max = right - left
             };
             right++;
             left = right;
          } else {
             right++
          };
       };
       return right - left > max ?right - left : max;
    }
    function alertCons(){
        alert(findMaxConsecutiveOnes(arr))
    }
return(
    <Fragment>
    <button onClick={alertCons} style={{backgroundColor:'green',color:'white',height:'40px',border:'1px solid white',margin:'20px 10px'}}>get Consecutive</button>
  
</Fragment>
)
}
export default ConsecutiveOne