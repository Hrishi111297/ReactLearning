import { Imagee_Url } from "../constant";

const Restcard = (props) => {
    const{ data }=props;
    const{id,name,age,gender,image,type,location}=data;
    console.log(data)
    return (
      <div className="res-card">
        <img className="clogo" src={image} alt="Restaurant Logo" />
    <h3>{id}</h3>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{gender}</h4>
     
      </div>
    );
  };
  export  default Restcard ;