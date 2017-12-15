import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TinMask from './TinMask';
import SovosTooltip from '../../../sovos-tooltip/SovosTooltip';

const defaultProps = {
  records: {}
};

const renderComponent = (conf) => {
  const props = Object.assign({}, defaultProps, conf);
  return shallow(<TinMask records={ props.records } />);
};

describe('TinMask >', () => {
  describe('Init component >', () => {
    it('Apply mask with Tin Type 1 >', () => {
      const component = renderComponent({ records: { TIN: '123456789', TINTYPE: '1' } });
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ 'XX-XXX6789' } />)).to.be.true;
    });
    it('Apply mask with Tin Type 2 >', () => {
      const component = renderComponent({ records: { TIN: '123456789', TINTYPE: '2' } });
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ 'XXX-XX-6789' } />)).to.be.true;
    });
    it('Apply mask with Tin Type unknown >', () => {
      const component = renderComponent({ records: { TIN: '123456789', TINTYPE: 'unknown' } });
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ 'XXXXX6789' } />)).to.be.true;
    });
    it('Apply mask with Tin Type undefined >', () => {
      const component = renderComponent({ records: { TIN: '123456789' } });
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ 'XXXXX6789' } />)).to.be.true;
    });
  });
  describe('Show value >', () => {
    it('Show value with mask when Tin Type is 1 >', () => {
      const component = renderComponent({ records: { TIN: '123456789', TINTYPE: '1' } });
      component.props().onMouseOver();
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ '12-3456789' } />)).to.be.true;
    });
    it('Show value with mask when Tin Type is 2 >', () => {
      const component = renderComponent({ records: { TIN: '123456789', TINTYPE: '2' } });
      component.props().onMouseOver();
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ '123-45-6789' } />)).to.be.true;
    });
    it('Show value with mask when Tin Type is unknown >', () => {
      const component = renderComponent({ records: { TIN: '123456789', TINTYPE: 'unknown' } });
      component.props().onMouseOver();
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ '123456789' } />)).to.be.true;
    });
    it('Show value with mask when Tin Type is undefined >', () => {
      const component = renderComponent({ records: { TIN: '123456789' } });
      component.props().onMouseOver();
      expect(component.contains(<SovosTooltip id={ '123456789' } label={ '123456789' } />)).to.be.true;
    });
  });
});
