import { Imagee_Url } from "../constant";

const Restcard = (props) => {
    const{ data }=props;
    const{id,name,age,email,city}=data;
    console.log(data)
    return (
      <div className="res-card">
        <img className="clogo" src={Imagee_Url} alt="Restaurant Logo" />
    <h3>{id}</h3>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{email}</h4>
      </div>
    );
  };
  export  default Restcard ;