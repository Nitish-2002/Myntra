import React from "react";
import '../../styles/Cards.scss'
import { Link } from 'react-router-dom';
import SingleCard from "./SingleCard";
function Card() {
    // const navigate = useNavigate();
    return (
        <div className="banner">
            <SingleCard image="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0f2b49dc-83f3-41d6-a534-7e2600c4060c1697639143412-MSB-Coupon--copy-3.jpg" />
        <div className="main-card--logo">
            
            {/* <SingleCard image="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/aff9e6bb-98ef-4b42-9be5-01ae5dc699261697628006821-Dussehra_HP_Banner_01.jpg"  onClick={() => navigate("/Category/men")}/> */}
            {/* <SingleCard image="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/b0935e85-2661-4943-ad03-a787f8829bfa1697628006816-Dussehra_HP_Banner_02.jpg"  onClick={() => navigate("/Category/men")} alt=""/> */}
            <Link to="/Category/men">
          <SingleCard
            image="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/aff9e6bb-98ef-4b42-9be5-01ae5dc699261697628006821-Dussehra_HP_Banner_01.jpg"
          />
          </Link>
          <Link to="/Category/women">
          <SingleCard image="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/b0935e85-2661-4943-ad03-a787f8829bfa1697628006816-Dussehra_HP_Banner_02.jpg"/>
        </Link>
        </div>
        </div>
    )
}
export default Card