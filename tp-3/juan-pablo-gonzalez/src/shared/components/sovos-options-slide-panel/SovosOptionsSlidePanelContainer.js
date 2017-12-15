import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OptionsSlidePanel from './SovosOptionsSlidePanel';
import * as actions from '../../../redux/overlayLayer/OverlayLayerActions';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(OptionsSlidePanel);
