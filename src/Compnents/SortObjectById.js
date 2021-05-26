import React, { Fragment, useState } from "react"

const SortObjectById = () =>{
    const[getData,setData]=useState()
    const list = [
  {id : 4, name : 'abc'},
  {id : 10, name : 'ab2'},
  {id : 11, name : 'ab2' },
  {id : 5, name : 'abc3'},
  {id : 6, name : 'abc5'}
]
function sortmyId(){
    list.sort((a, b) => a.id - b.id)
    setData(list)
}

    return(
        <Fragment>
            <div style={{ backgroundColor:'black',color:'white',width:'200px',padding:'20px',margin:'20px'}}>
   <button onClick={sortmyId}>Sort me</button>
  
   {!getData && list?.map((e)=>(
       <div style={{display:'flex', backgroundColor:'black',color:'white',padding:'0 20px'}}>
           <p>{e?.id} : </p>
           <p>{e?.name}</p>
       </div>
   ))}
   {getData && getData?.map((e,i)=>(
       <div key={i} style={{display:'flex', backgroundColor:'black',color:'white',padding:'0 20px'}}>
           <p>{e?.id} : </p>
           <p>{e?.name}</p>
       </div>
   ))}
   </div>
        </Fragment>
    )

}
export default SortObjectById;