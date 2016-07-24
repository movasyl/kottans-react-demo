import React, { PropTypes } from 'react';

const Record = ({ lord, className }) => {
  if (!lord) { return <li className={className} />} 
  
  return (<li className={className}>
    <h3>{lord.name}</h3>
    <h6>{lord.homeworld.name}</h6>
  </li>);
};

Record.propTypes = {
  lord: PropTypes.object,
  className: PropTypes.string,
};

export default Record;

