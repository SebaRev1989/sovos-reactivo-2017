import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { sources } from '../../../redux/overlayLayer/OverlayLayerConstants';
import OptionsSlidePanelContent from './components/optionsSlideContent/OptionsSlidePanelContent';
import './sovosOptionsSlidePanel.scss';

const OptionsSlidePanel = ({ children, title, open, onRequestClose, actions }) => {
  const transitionsTimeout = 300;

  const closeSlidePanel = () => {
    actions.closeOverlayLayer(sources.OPTIONS_SLIDE_PANEL);
    onRequestClose();
  };

  const overloadChildren = () => cloneElement(children, { onClose: closeSlidePanel });

  return (
    <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={ transitionsTimeout } transitionLeaveTimeout={ transitionsTimeout } >
      {
        open &&
        <OptionsSlidePanelContent title={ title } openOverlayLayer={ actions.openOverlayLayer } onRequestClose={ closeSlidePanel }>{ overloadChildren() }</OptionsSlidePanelContent>
      }
    </CSSTransitionGroup>
  );
};

OptionsSlidePanel.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  actions: PropTypes.shape({
    openOverlayLayer: PropTypes.func,
    closeOverlayLayer: PropTypes.func
  }).isRequired
};

OptionsSlidePanel.defaultProps = {
  onRequestClose: () => null
};

export default OptionsSlidePanel;
