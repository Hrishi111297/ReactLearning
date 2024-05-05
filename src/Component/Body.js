import data from "../utils";
import Restcard from "./RestCard";
const Body=()=>{
    return (
      <div className="body">
        <div className="search" style={{margin:"10px"}}> Search</div>
        <div className="res">
       { data.map((item,index)=>(
        <div className="res-con"  key={item.id}><Restcard data={item}/></div>
       ))
       }
      </div>
      </div>
    )
  }
  export  default Body ;