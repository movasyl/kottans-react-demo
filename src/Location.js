import React, { PropTypes } from  'react';

                 // props 
const Location = ({ planet }) =>
  <h1 className="css-planet-monitor">Obi-Wan currently on {planet}</h1>

Location.propTypes = {
  planet: PropTypes.string.isRequired,
};

export default Location;
