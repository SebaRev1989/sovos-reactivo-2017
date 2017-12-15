import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormField from './FormField';
import * as actions from '../../redux/DynamicFormActions';

const mapStateToProps = state => ({
  form: state.dynamicForm.form,
  fchar: state.dynamicForm.fchar
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FormField);
