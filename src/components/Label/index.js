import React from 'react';
import PropTypes from 'prop-types';

import './label.scss';

// get label style class based on the type
const getLabelClass = (type) => {
  switch (type) {
    case 'regular':
      return 'label-regular';
    case 'bold':
      return 'label-bold';
    default:
      return 'label-regular';
  }
};
/**
 * Label component
 * more props can be added to customize label component like fontSize, fontColor, lineheight etc
 */
const Label = ({ text, type }) => {
  return <p className={`${getLabelClass(type)}`}>{text}</p>;
};

Label.propTypes = {
  /**
   * Label text
   */
  text: PropTypes.string,
  /**
   * Label type
   */
  type: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  type: 'regular',
};

export default Label;
