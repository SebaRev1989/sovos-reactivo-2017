import React from 'react';
import PropTypes from 'prop-types';
import './TinFixedWidth.scss';

const TinFixedWidth = props =>
  <th className="tin-fixed-width" >{ props.label }</th>;

TinFixedWidth.propTypes = {
  label: PropTypes.string.isRequired
};

export default TinFixedWidth;
