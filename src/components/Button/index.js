import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

// get button style class based on the type
const getButtonClass = (type) => {
  switch (type) {
    case 'primary':
      return 'btn-primary';
    case 'secondary':
      return 'btn-secondary';
    default:
      return 'btn-primary';
  }
};
/**
 * Button component
 */
const Button = ({ title, type, onButtonClick }) => {
  return (
    <button className={`${getButtonClass(type)}`} onClick={onButtonClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button title
   */
  title: PropTypes.string,
  /**
   * Button type
   */
  type: PropTypes.string,
  /**
   * Button click event
   */
  onButtonClick: PropTypes.func,
};

Button.defaultProps = {
  title: '',
  type: 'primary',
  onButtonClick: null,
};

export default Button;
