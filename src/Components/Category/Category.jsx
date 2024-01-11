import React from "react";
import LeftNav from "./LeftNav"
import RightNav from "./RightNav"
import "../../styles/category.scss"
function Category(){
    return (
        <div className="category">
            <LeftNav id="men"/>
            <RightNav />
        </div>
    )
}
export default Category;
