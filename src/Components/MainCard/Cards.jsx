import React from "react";
import SingleCard from "../Cards/SingleCard";

function Card({each}){
    return (
        
        <div className="Main--Card">
          <div className="Main--Card--heading">
          
          <SingleCard image={each.name}/>
          </div>
          {(each.isstate==="true")&&(<div className="Main--Card--subtitle">
            <h2>{each.subName}</h2>
            <SingleCard image={each.image}/>
           
          </div>)}
          <div className="Main--Card--Card">{
            each.items.map((item)=>(
              <div><img src={item} alt="" /></div>
            ))
          }
          </div>
        </div>
    );
}
export default Card;