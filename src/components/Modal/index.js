import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import IconButton from '../IconButton';
import Label from '../Label';

import './modal.scss';

/**
 * Modal component
 */
const Modal = ({ children, headerTitle, onHeaderClose, onActionClick, onCancelClick }) => {
  return (
    <div className="container">
      <div className="header">
        <Label text={headerTitle} type="bold" color="#FFFFFF" />
        <IconButton
          iconName="faTimes"
          iconSize="medium"
          iconColor="black"
          onIconClick={onHeaderClose}
        />
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <Button title="Cancel" type="secondary" onButtonClick={onCancelClick} />
        <Button title="Action" type="primary" onButtonClick={onActionClick} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  /**
   * header title for modal
   */
  headerTitle: PropTypes.string,
  /**
   * Header close button handler
   */
  onHeaderClose: PropTypes.func,
  /**
   * Modal action button handler
   */
  onActionClick: PropTypes.func,
  /**
   * Modal cancel button handler
   */
  onCancelClick: PropTypes.func,
  /**
   * Modal children
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Modal.defaultProps = {
  headerTitle: 'Modal header',
  onHeaderClose: undefined,
  onActionClick: undefined,
  onCancelClick: undefined,
  children: null,
};

export default Modal;
