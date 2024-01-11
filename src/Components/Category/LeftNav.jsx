import React, { useState } from "react";
import CategoryObj from "../../Objects/CategoryObj";

function LeftNav() {
  const [showClearAll, setShowClearAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(
    CategoryObj.map((category) =>
      category.items.map((item) => false)
    )
  );

  const handleCheckboxChange = () => {
    setShowClearAll(true);
  };

  const handleClearAllClick = () => {
    setShowClearAll(false);
    setCheckboxes(
      CategoryObj.map((category) =>
        category.items.map((item) => false)
      )
    );
  };

  return (
    <div className="category--height">
      <div className="category--filter">
        <span>Filters</span>
        {showClearAll && (
          <span
            className="category--filter--clear-all-button"
            
            onClick={handleClearAllClick}
          >
            Clear All
          </span>
        )}
      </div>
      {CategoryObj.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category--heading">
          <h4>{category.heading}</h4>
          {category.items.map((item, itemIndex) => (
            <div className="category--checkbox" key={itemIndex}>
              <input
                type="checkbox"
                name={item}
                id={itemIndex}
                checked={checkboxes[categoryIndex][itemIndex]}
                onChange={() => {
                  const updatedCheckboxes = [...checkboxes];
                  updatedCheckboxes[categoryIndex][itemIndex] = !updatedCheckboxes[categoryIndex][itemIndex];
                  setCheckboxes(updatedCheckboxes);
                  handleCheckboxChange();
                }}
              />
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LeftNav;