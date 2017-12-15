import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeLayoutBody from './ResizeLayoutBody';
import { toggleDrawerOpen } from '../../../../redux/ux/UxActions';

const mapStateToProps = state => (
  {
    browser: state.browser,
    responsiveDrawer: state.uxReducer
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({ toggleDrawerOpen }, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ResizeLayoutBody);
