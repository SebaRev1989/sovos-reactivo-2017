import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  svgIcons
} from 'fusionui-shared-components-react';
import isResponsiveAndOverBreakPoint from '../../../../redux/ux/UxHelper';
import './resizeLayoutBody.scss';
import ContextSwitcher from '../../context/ContextSwitcherContainer';

const { NavigationMenu } = svgIcons;

const ResizeLayoutBody = (props) => {
  const { browser, responsiveDrawer, children, actions, style, elementRight, showAppBar, iconElementLeftAppend } = props;

  const isOverBrowserBreakPoint = isResponsiveAndOverBreakPoint(browser, responsiveDrawer);

  const styleContent = {
    position: isOverBrowserBreakPoint ? 'static' : 'absolute',
    left: isOverBrowserBreakPoint ? responsiveDrawer.drawerWidth : 0,
    top: 0,
    right: 0,
    bottom: 0,
    ...style
  };

  const leftIcons = (
    <div className="layout-body__app-bar__left-icon-container">
      {
        !isOverBrowserBreakPoint &&
        <div><ContextSwitcher collapsed /><IconButton onTouchTap={ actions.toggleDrawerOpen }><NavigationMenu color={ '#000' } /></IconButton></div>
      }
      {
        iconElementLeftAppend &&
        <div className="layout-body__app-bar__left-icon-append">
          { iconElementLeftAppend }
        </div>
      }
    </div>
  );

  const appBarProps = {
    style: { backgroundColor: 'white' },
    title: props.title,
    titleStyle: { color: '#000', fontSize: 18, fontWeight: 300, display: props.title ? 'inline-block' : 'none' },
    iconElementLeft: leftIcons,
    iconElementRight: elementRight
  };

  return (
    <div style={ styleContent }>
      { showAppBar && <AppBar className="layout-body__app-bar" { ...appBarProps } /> }
      { !showAppBar && leftIcons }
      { children }
    </div>
  );
};

ResizeLayoutBody.defaultProps = {
  style: {},
  elementRight: undefined,
  children: undefined
};

ResizeLayoutBody.propTypes = {
  showAppBar: PropTypes.bool,
  children: PropTypes.element,
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  title: PropTypes.string,
  elementRight: PropTypes.element,
  style: PropTypes.object,
  actions: PropTypes.shape({
    toggleDrawerOpen: PropTypes.func
  }).isRequired,
  iconElementLeftAppend: PropTypes.element
};

ResizeLayoutBody.defaultProps = {
  title: '',
  showAppBar: true,
  iconElementLeftAppend: null
};

export default ResizeLayoutBody;
