import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; // eslint-disable-line import/no-extraneous-dependencies
import DragSourceComponent from './DragSourceComponent';
import wrapInTestContext from '../../../../../testUtilities/wrapInTestContext';

const defaultProps = {
  id: 1,
  onEndDrag: () => null,
  key: 1,
  itemType: 'testItem',
  elementInfo: {},
  cantDrag: false,
};

const renderComponent = (conf = {}) => {
  const props = { ...defaultProps, ...conf };
  const WrapedDragSourceComponent = wrapInTestContext(DragSourceComponent);
  return mount(
    <WrapedDragSourceComponent { ...props } />,
    { context: { muiTheme: getMuiTheme() }, childContextTypes: { muiTheme: PropTypes.object } }
  );
};

describe('DragSourceComponent > ', () => {
  describe('ComponentDidMount > ', () => {
    describe('Default component > ', () => {
      describe('Children exists > ', () => {
        it('Should have an instance of DragSourceComponent', () => {
          expect(renderComponent().exists()).to.be.true;
        });
      });
      describe('Default Props > ', () => {
        it('Should have a callback to onClose', () => {
          expect(renderComponent().prop('id')).to.eql(1);
        });
      });
      describe('Required Props > ', () => {
        it('Should have a list for visible columns', () => {
          expect(renderComponent().prop('itemType')).to.eql('testItem');
        });
      });
    });
  });
  describe('ComponentWillReceiveProps', () => {
    describe('Updated Props', () => {
      it('Should update the hidden columns', () => {
        expect(renderComponent().setProps({ cantDrag: true }).prop('cantDrag')).to.eql(true);
      });
    });
  });
});
