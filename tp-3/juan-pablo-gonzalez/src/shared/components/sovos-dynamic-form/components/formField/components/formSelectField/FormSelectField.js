import React, { Component } from 'react';
import { SelectField, MenuItem } from 'fusionui-shared-components-react';
import PropTypes from 'prop-types';
import '../../FormField.scss';
import './FormSelectField.scss';

const style = {
  width: '100%',
  height: 30,
  border: 'none',
  backgroundColor: 'rgb(239, 239, 239)',
  fontSize: 12,
};

class FormSelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange = (ev, idx, value) => {
    this.props.onChange(ev, value, this.props.onBlur);
    this.setState({ value });
  }

  render() {
    const { label, fchar, options } = this.props;
    return (
      <div className="form-field__wrapper form-select__wrapper">
        <label className="form-field__label" htmlFor={ name }>{ label[fchar] || label.DEFAULT }</label>
        <SelectField
          style={ style }
          menuStyle={ style }
          selectedMenuItemStyle={ { fontWeight: 'bold', color: '#000' } }
          value={ this.state.value }
          onChange={ this.handleChange }
          underlineStyle={ { marginBottom: -8, width: '100%' } }
          labelStyle={ { paddingLeft: 10, lineHeight: '40px', height: 40 } }
        >
          <MenuItem value="" primaryText="Select..." />
          { options.map(option => <MenuItem value={ option.value } key={ option.value } primaryText={ option.text } />) }
        </SelectField>
      </div>
    );
  }
}

FormSelectField.propTypes = {
  fchar: PropTypes.string.isRequired,
  label: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string
};

FormSelectField.defaultProps = {
  errorText: '',
  label: {},
  value: ''
};

export default FormSelectField;
