import { useState } from "react";
function Card({id,name,info,image,price,removeTour}){
    const[readMore,setReadmore] = useState(true);
    const description=readMore ? `${info.substring(0,200)}....` : info;
    function handleReadmore(){
        setReadmore(!readMore);
    }

    return(
    <div className="card">
        <img src={image} className="image"></img>
        <h4 className="tour-name">{name}</h4>
        <p className="tour-price">{price}</p>
        <div>
            {description}
        </div>
        <span onClick={handleReadmore} className="read-more">{readMore ? `Read More` : `Show Less`}</span>
        <button onClick={()=>removeTour(id)
            } className="btn-red">Not Interested</button>
    </div>
    );
}
export default Card;
//my