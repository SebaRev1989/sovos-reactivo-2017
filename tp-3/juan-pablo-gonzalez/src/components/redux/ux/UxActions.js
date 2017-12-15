import actionTypes from './UxConstants';

const toggleDrawerOpen = () => ({ type: actionTypes.RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN });

const hideDrawer = () => ({ type: actionTypes.HIDE_DRAWER });

export {
  toggleDrawerOpen,
  hideDrawer
};
