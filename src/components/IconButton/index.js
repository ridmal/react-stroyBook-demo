import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import './iconButton.scss';

const getIconSize = (size) => {
  switch (size) {
    case 'large':
      return '3x';
    case 'medium':
      return 'lg';
    case 'small':
      return 'xs';
    default:
      return 'lg';
  }
};

/**
 * Icon button component
 */
const IconButton = ({ iconName, iconSize, iconColor, onIconClick }) => {
  return (
    <button className="btnWrapper" onClick={onIconClick}>
      <FontAwesomeIcon
        className="icon"
        icon={Icons[`${iconName}`]}
        size={getIconSize(iconSize)}
        color={iconColor}
      />
    </button>
  );
};

IconButton.propTypes = {
  /**
   * Icon name
   */
  iconName: PropTypes.string,
  /**
   * Icon size
   */
  iconSize: PropTypes.string,
  /**
   * Icon color
   */
  iconColor: PropTypes.string,
  /**
   * Icon color
   */
  onIconClick: PropTypes.func,
};

IconButton.defaultProps = {
  iconName: '',
  iconSize: 'large',
  iconColor: 'black',
  onIconClick: undefined,
};

export default IconButton;
