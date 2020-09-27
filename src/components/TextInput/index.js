import React from 'react';
import PropTypes from 'prop-types';

import './textInput.scss';

/**
 * Label component
 * more props can be added to customize text input component like styles, name, id etc
 */
const TextInput = ({ type, placeholderText }) => {
    return <input className='textInput' type={type} placeholder={placeholderText} />
}

TextInput.propTypes = {
    /**
     * Text input type ( text, number , etc )
     */
    type: PropTypes.string,
    /**
    * Text input placeholder text
    */
    placeholderText: PropTypes.string,
};

TextInput.defaultProps = {
    type: 'text',
    placeholderText: ''
};

export default TextInput;