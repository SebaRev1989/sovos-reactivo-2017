import { actionTypes } from './OverlayLayerConstants';

const openLayerSuccess = (source, onOverlayClick) => ({ type: actionTypes.OPEN_LAYER_SUCCESS, source, onOverlayClick });
const closeLayerSuccess = source => ({ type: actionTypes.CLOSE_LAYER_SUCCESS, source });

const openOverlayLayer = (source, onOverlayClick) => dispatch => dispatch(openLayerSuccess(source, onOverlayClick));
const closeOverlayLayer = source => dispatch => dispatch(closeLayerSuccess(source));

export {
  openOverlayLayer,
  closeOverlayLayer
};
