import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ColumnSelector from './ColumnsSelector';
import * as appSettingsActions from '../../../redux/appSettings/AppSettingsActions';
import * as formMetaInformationActions from '../../../shared/components/sovos-dynamic-form/redux/FormMetaInformationActions';

const mapStateToProps = state => ({
  updatingTableOptions: state.appSettings.updatingTableOptions
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...appSettingsActions, ...formMetaInformationActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSelector);
