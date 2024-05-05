
import Restcard from "./RestCard";
import { useState } from "react";
import data from "../utils"
const Body=()=>{
  const [list,setList]=useState(data);
    return (
      <div className="body">
        <div className="filter" style={{margin:"10px"}}> 
        <div className="f-btn-con">
<button className ="filter-btn" onClick={()=>{
filterList= list.filter((res)=>res.id<3
  );
  //console.log(data);
  setList(filterList);

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