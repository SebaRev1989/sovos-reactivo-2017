import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SovosTooltip from '../../../sovos-tooltip/SovosTooltip';

const constants = {
  tin: 'TIN',
  tinType: 'TINTYPE',
  fk1: 'FK1'
};

class TinMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showValue: false
    };
  }

  applyMaskForSSN = value => (
    this.state.showValue ? `${value.substr(0, 3)}-${value.substr(3, 2)}-${value.substr(5, 4)}` : `XXX-XX-${value.substr(5, 4)}`
  )

  applyMaskForEIN = value => (
    this.state.showValue ? `${value.substr(0, 2)}-${value.substr(2)}` : `XX-XXX${value.substr(5, 4)}`
  )

  applyMaskForUnknown = value => (
    this.state.showValue ? value : `XXXXX${value.substr(5, 4)}`
  )

  toggleShowValue = () => this.setState({ showValue: !this.state.showValue });

  render() {
    const value = this.props.records[constants.tin] || this.props.records[constants.fk1] || '';
    const tinType = this.props.records[constants.tinType];
    let mask;
    switch (tinType) {
      case '1':
        mask = this.applyMaskForEIN(value);
        break;
      case '2':
        mask = this.applyMaskForSSN(value);
        break;
      default:
        mask = this.applyMaskForUnknown(value);
        break;
    }

    return (
      <span onMouseOver={ this.toggleShowValue } onMouseOut={ this.toggleShowValue } >
        <SovosTooltip id={ value } label={ mask } />
      </span>
    );
  }
}

TinMask.propTypes = {
  records: PropTypes.object.isRequired
};

export default TinMask;
