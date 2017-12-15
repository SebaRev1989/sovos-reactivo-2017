import actionTypes from './UxConstants';

const initialStore = {
  docked: false,
  open: false,
  searching: false,
  drawerWidth: 240,
  breakPoint: 'medium'
};

export default function UxReducer(state = initialStore, action) {
  switch (action.type) {

    case actionTypes.RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN:
      return {
        ...state,
        open: !state.open
      };

    case actionTypes.HIDE_DRAWER:
      return {
        ...state,
        open: false
      };

    default:
      return state;
  }
}
