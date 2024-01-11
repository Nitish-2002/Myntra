import React from "react";
import arr from "../../Objects/products1";
import { useNavigate } from "react-router-dom";

function Details() {
    const navigate = useNavigate();

    const handleCategoryClick = (name) => {
        navigate(`/${name.toLowerCase()}`);
    };

    return (
        <div className="navbar--details">
            {arr.map((each, index) => (
                <div
                    key={index}
                    className="navbar--details--single"
                    onClick={() => handleCategoryClick(each.name)}
                >
                    <div className="navbar--details--image">{each.image}</div>
                    <div className="navbar--details--name">{each.name}</div>
                </div>
            ))}
        </div>
    );
}

export default Details;
