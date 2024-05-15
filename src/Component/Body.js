
import Restcard from "./RestCard";
import { useEffect, useState } from "react";
import data from "../utils"
import Shimmer from "./Shimmer";
const Body=()=>{



  const [list,setList]=useState([]);
 

useEffect(()=>{fettchData();},[]);
fettchData=async()=>{
  let data =await fetch("https://rickandmortyapi.com/api/character");

  const appList=await data.json();
console.log(appList.results[0]);
setList(appList.results)
}
return list.length===0? (<Shimmer/>):
     (
      <div className="body">
        <div className="filter" style={{margin:"10px"}}> 
        <div className="f-btn-con">
<button className ="filter-btn" onClick={()=>{
filterList= list.filter((res)=>res.id<3
  );
//console.log(list);


}}>click me</button>
        </div>
        </div>
        <div className="res">
       { list.map((item,index)=>(
        <div className="res-con"  key={item.id}><Restcard data={item}/></div>
       ))
       }
      </div>
      </div>
    )
  }
  export  default Body ;