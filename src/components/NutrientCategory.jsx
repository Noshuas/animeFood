import React from 'react';
import Nutrient from './Nutrient.jsx';

const NutrientCategory = ({name, needs, fulfilled}) => {
  let nutrientList = [];
  if (typeof needs === 'object') {
    nutrientList = Object.keys(fulfilled)
  }

  return (nutrientList.length) ? (
    <div id={name} >
      <h3>{name}</h3>
        <div className="nutrientList">
          {nutrientList.map((nutrient) => (
            <Nutrient
              name={nutrient}
              needs={needs[nutrient]}
              fulfilled={fulfilled[nutrient]}
            />
          ))}
        </div>
    </div>
  ) : '';
}

export default NutrientCategory;
