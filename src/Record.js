import React, { PropTypes } from 'react';

const Record = ({ lord, className }) => (
  <li className={className}>
    <h3>{lord.name}</h3>
    <h6>{lord.homeworld}</h6>
  </li>
);

Record.propTypes = {
  lord: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Record;

