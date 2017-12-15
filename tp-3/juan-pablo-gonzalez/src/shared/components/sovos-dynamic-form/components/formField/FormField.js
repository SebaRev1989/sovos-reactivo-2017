import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import FormTextField from './components/formTextField/FormTextField';
import FormSelectField from './components/formSelectField/FormSelectField';
import FormCheckBoxField from './components/formCheckBoxField/FormCheckBoxField';

const formFields = {
  TextField: FormTextField,
  SelectField: FormSelectField,
  CheckBoxField: FormCheckBoxField
};

class FormField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldName: props.content.dbColumn,
      fieldValue: props.form[props.content.dbColumn]
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ fieldValue: nextProps.form[this.props.content.dbColumn] });
  }

  handleOnChange = (e, val, callback = () => null) => this.setState({ fieldValue: val }, callback);

  handleOnBlur = () => this.props.actions.setFieldValue(this.state.fieldName, this.state.fieldValue);

  render() {
    return createElement(formFields[this.props.content.type],
      {
        ...this.props.content,
        name: this.state.fieldName,
        value: this.state.fieldValue,
        fchar: this.props.fchar,
        onChange: this.handleOnChange,
        onBlur: this.handleOnBlur
      });
  }
}

FormField.propTypes = {
  content: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  fchar: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    setFieldValue: PropTypes.func
  }).isRequired
};

export default FormField;
