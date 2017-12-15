import { actionTypes } from './OverlayLayerConstants';

const initialStore = {
  openLayers: []
};

export default function OverlayLayerReducer(state = initialStore, action) {
  let editedState;
  const duplicateState = () => (Object.assign({}, state));

  switch (action.type) {
    case actionTypes.OPEN_LAYER_SUCCESS:
      editedState = duplicateState();
      editedState.openLayers = [...editedState.openLayers, { source: action.source, onClick: action.onOverlayClick }];
      break;
    case actionTypes.CLOSE_LAYER_SUCCESS:
      editedState = duplicateState();
      editedState.openLayers = editedState.openLayers.filter(element => element.source !== action.source);
      break;
    case actionTypes.LOGOUT_SUCCESS:
      editedState = duplicateState();
      editedState = initialStore;
      break;
    default:
      return state;
  }

  return editedState;
}
