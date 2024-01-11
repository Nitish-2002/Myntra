import React, { useState } from 'react';
import ArrItems from '../../Objects/NavbarObj';
import Logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Items() {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredCategory(index);
  };

  const handleMouseOut = () => {
    setHoveredCategory(null);
  };

  const handleCategoryClick = (categoryName) => {
    // Programmatically navigate to the desired category URL
    navigate(`/Category/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="flex navbar--items">
      <div className="navbar--logo">
        <img src={Logo} alt="Logo" onClick={() => navigate('/home')} />
      </div>
      {ArrItems.map((category, index) => (
        <div
          key={index}
          className="navbar--heading"
          onMouseEnter={() => handleMouseOver(index)}
          onMouseLeave={handleMouseOut}
        >
          {/* Use an anchor element for category name */}
          <div
            href={`/Category/${category.name.toLowerCase()}`}
            className='navbar--items'
            onClick={(e) => {
              e.preventDefault(); // Prevent the default link behavior
              handleCategoryClick(category.name);
            }}
          >
            <h4>{category.name}</h4>
          </div>
          {/* {hoveredCategory === index && (
            <div className="navbar--items--items">
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
}

export default Items;
