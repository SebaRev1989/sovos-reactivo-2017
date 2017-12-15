import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TinType from './TinType';

const defaultProps = {
  records: {}
};

const renderComponent = (conf) => {
  const props = Object.assign({}, defaultProps, conf);
  return shallow(<TinType records={ props.records } />);
};

describe('TinType >', () => {
  describe('Init component >', () => {
    it('Apply mask with Tin Type 1 >', () => {
      const component = renderComponent({ records: { TINTYPE: '1' } });
      expect(component.text()).to.equal('EIN');
    });
    it('Apply mask with Tin Type 2 >', () => {
      const component = renderComponent({ records: { TINTYPE: '2' } });
      expect(component.text()).to.equal('SSN');
    });
    it('Apply mask with Tin Type unknown >', () => {
      const component = renderComponent({ records: { TINTYPE: '0' } });
      expect(component.text()).to.equal('UNK');
    });
    it('Apply mask with Tin Type undefined >', () => {
      const component = renderComponent({ records: { TINTYPE: 'unknown' } });
      expect(component.text()).to.equal('UNK');
    });
  });
});
