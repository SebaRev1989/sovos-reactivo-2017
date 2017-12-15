import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'fusionui-shared-components-react';
import './FormCheckBoxField.scss';

class FormCheckBoxField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.value === '1',
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    const checked = nextProps.options[nextProps.value] || false;
    this.setState({ checked, value: nextProps.value });
  }

  handleCheckboxChange = (ev) => {
    const checked = !this.state.checked;
    const value = Object.keys(this.props.options).find(option => this.props.options[option] === checked);
    this.setState({ checked, value });
    this.props.onChange(ev, value, this.props.onBlur);
  };

  render() {
    const { name, label, fchar } = this.props;
    return (
      <div className="form-checkbox-field__wrapper">
        <Checkbox
          label={ label[fchar] || label.DEFAULT }
          name={ name }
          checked={ this.state.checked }
          onCheck={ this.handleCheckboxChange }
          style={ { width: 'auto' } }
        />
      </div>
    );
  }
}

FormCheckBoxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.object,
  fchar: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  options: PropTypes.object
};

FormCheckBoxField.defaultProps = {
  label: {},
  options: {},
  value: '0'
};

export default FormCheckBoxField;

