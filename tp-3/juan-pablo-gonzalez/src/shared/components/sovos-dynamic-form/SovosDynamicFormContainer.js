import { connect } from 'react-redux';
import SovosDynamicForm from './SovosDynamicForm';

const mapStateToProps = state => ({
  form: state.dynamicForm.form
});

export default connect(mapStateToProps)(SovosDynamicForm);
