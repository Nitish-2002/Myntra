import React from "react";
import "../../styles/MainCard.scss"
import Card from "./Cards";
import {CardObj,CardObj1} from "../../Objects/CardObj";

function MainCard(){
    
    return (
        <div className="Main">
        {CardObj.map((each)=>(
            <Card each={each}/>
            
        ))}
        {CardObj1.map((each)=>(
            <Card each={each}/>
        ))}
        
        </div>

    );
}
export default MainCard;