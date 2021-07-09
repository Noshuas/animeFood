import React from 'react';

const Nutrient = ({name, needs, fulfilled}) => {

  if (typeof needs === 'object') {
    needs = needs.low;
  }

  let width = (fulfilled / needs);
  let percentage = `${Math.round(width * 100)}%`
  width = (width > 1) ? '100%' : `${Math.round(width * 100)}%`;

  let style = { width };

  return (
    <div>
      <h6>{`${name}: ${percentage}`}</h6>
      <div className="nutrientBar" style={style}/>
    </div>
  )
}

export default Nutrient;
