import React, { PropTypes } from  'react';
const Button = ({ className, onClick, disabled }) =>
  <button 
    disabled={disabled}
    className={`${className}${disabled ? ' css-button-disabled': ''}`}
    onClick={onClick} 
  />

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
