import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'fusionui-shared-components-react';
import '../../FormField.scss';

const FormTextField = ({ name, value, label, placeholder, fchar, onChange, onBlur }) => (
  <div className="form-field__wrapper">
    <label className="form-field__label" htmlFor={ name }>{ label[fchar] || label.DEFAULT }</label>
    <TextField
      className="form-field__input"
      name={ name }
      value={ value }
      onChange={ onChange }
      onBlur={ onBlur }
      placeholder={ placeholder }
      style={ { height: 30 } }
      inputStyle={ { backgroundColor: '#efefef', height: 30, padding: '0 10px', boxSizing: 'border-box' } }
      underlineStyle={ { marginBottom: -8, width: '100%' } }
    />
  </div>
);

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.object,
  placeholder: PropTypes.string,
  fchar: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

FormTextField.defaultProps = {
  placeholder: '',
  value: '',
  label: {}
};

export default FormTextField;
