
import React from "react";
import Card from "./Card";
import "../../styles/Men.scss";

function Men({ menData }) {
  return (
    <div className="Card--Main">
      {menData.map((each, index) => (
        <Card key={index} each={each} />
      ))}
    </div>
  );
}

export default Men;
