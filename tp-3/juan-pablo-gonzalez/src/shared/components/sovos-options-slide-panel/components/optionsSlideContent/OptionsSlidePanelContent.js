import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionsSlidePanelHeader from '../optionsSlideHeader/OptionsSlidePanelHeader';
import { sources } from '../../../../../redux/overlayLayer/OverlayLayerConstants';

class RightSlideContent extends Component {
  componentDidMount() {
    this.props.openOverlayLayer(sources.OPTIONS_SLIDE_PANEL, this.props.onRequestClose);
  }
  render() {
    const { title, children } = this.props;
    return (
      <div className="options-slide-panel__container">
        <OptionsSlidePanelHeader title={ title } />
        <div className="options-slide-panel__child-container">
          { children }
        </div>
      </div>
    );
  }
}

RightSlideContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  openOverlayLayer: PropTypes.func.isRequired
};

export default RightSlideContent;
