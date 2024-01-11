import React, { useState } from "react";
import { useSearchContext } from "../Context/Context";
import Men from "../Items/Men";
import MenObj from "../../Objects/MenObj";

export default function RightNav() {
  const { searchTerm, setSearchTerm } = useSearchContext();
  const filteredMen = MenObj.filter((item) =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      
      {filteredMen.length > 0 ? (
        filteredMen.map((item, index) => (
          <div key={index}>
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
      <Men menData={filteredMen} /> 
    </div>
  );
}


