import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isResponsiveAndOverBreakPoint from '../../../../redux/ux/UxHelper';
import { sources } from '../../../../redux/overlayLayer/OverlayLayerConstants';
import './ResizeLayoutSideBar.scss';

const sideBarOpen = {
  width: 240,
  minWidth: 240
};

const sideBarClose = {
  width: 0,
  minWidth: 0
};

const getSideBarStyle = (overBreakPoint, openByUser) => {
  const isOpen = overBreakPoint || openByUser;
  const style = isOpen ? sideBarOpen : sideBarClose;
  return Object.assign({}, style, overBreakPoint && !openByUser ? {} : { zIndex: 1351, position: 'relative' });
};

class ResizeLayoutSideBar extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.browser.is.large && nextProps.browser.is.medium) this.props.actions.hideDrawer();
    if (this.props.browser.is.medium && nextProps.browser.is.large) this.closeOverlayLayer();
    if (!this.props.responsiveDrawer.open && nextProps.responsiveDrawer.open) this.props.actions.openOverlayLayer(sources.SIDE_BAR, this.closeSideBarAndLayer);
    if (this.props.responsiveDrawer.open && !nextProps.responsiveDrawer.open) this.closeOverlayLayer();
    if (!this.props.browser.is.infinity && nextProps.browser.is.infinity) this.closeSideBarAndLayer();
  }

  closeOverlayLayer = () => this.props.actions.closeOverlayLayer(sources.SIDE_BAR);

  closeSideBarAndLayer = () => {
    this.closeOverlayLayer();
    this.props.actions.hideDrawer();
  }

  render() {
    const { children, browser, responsiveDrawer } = this.props;
    const overBreakPoint = isResponsiveAndOverBreakPoint(browser, responsiveDrawer);

    return (
      <div className="resize-layout-sidebar__container" style={ getSideBarStyle(overBreakPoint, responsiveDrawer.open) } >
        { children }
      </div>
    );
  }
}

ResizeLayoutSideBar.propTypes = {
  children: PropTypes.element.isRequired,
  responsiveDrawer: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    toggleDrawerOpen: PropTypes.func,
    hideDrawer: PropTypes.func,
    openOverlayLayer: PropTypes.func,
    closeOverlayLayer: PropTypes.func
  }).isRequired
};

export default ResizeLayoutSideBar;
