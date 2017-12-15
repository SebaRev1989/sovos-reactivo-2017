import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; // eslint-disable-line import/no-extraneous-dependencies
import { VisibleIcon, HiddenIcon } from '../../../svgIcons/SvgIcons'; // eslint-disable-line import/no-extraneous-dependencies
import ColumnList from './ColumnList';

const defaultVisibleColumns = [
  { key: 'a', name: 'name-a', order: 0, label: 'label-a' },
  { key: 'b', name: 'name-b', order: 1, label: 'label-b' },
  { key: 'c', name: 'name-c', order: 2, label: 'label-c' }
];

const hiddenColumns = [
  { key: 'd', name: 'name-d', order: 0, label: 'label-d' },
  { key: 'e', name: 'name-e', order: 1, label: 'label-e' },
  { key: 'f', name: 'name-f', order: 2, label: 'label-f' }
];

const defaultProps = {
  visibleColumns: defaultVisibleColumns,
  hiddenColumns: [],
  onHideColumn: () => null,
  onShowColumn: () => null,
  onDrop: () => null
};

const renderComponent = (conf = {}) => {
  const props = Object.assign({}, defaultProps, conf);
  return mount(
    <ColumnList { ...props } />,
    { context: { muiTheme: getMuiTheme() }, childContextTypes: { muiTheme: PropTypes.object } }
  );
};

describe('ColumnList > ', () => {
  describe('ComponentDidMount > ', () => {
    describe('Default component > ', () => {
      describe('Children exists > ', () => {
        it('Should have an instance of StateFullComponentSandbox', () => {
          expect(renderComponent().exists()).to.be.true;
        });
        it('Should have three visibleIcons', () => {
          expect(renderComponent().find(VisibleIcon).length).to.equal(3);
        });
        it('Should have three hiddenIcons', () => {
          expect(renderComponent({ hiddenColumns }).find(HiddenIcon).length).to.equal(3);
        });
      });
      describe('Default Props > ', () => {
        it('Should have a callback to onClose', () => {
          expect(renderComponent().prop('hiddenColumns')).to.eql([]);
        });
      });
      describe('Required Props > ', () => {
        it('Should have a list for visible columns', () => {
          expect(renderComponent().prop('visibleColumns')).to.eql(defaultVisibleColumns.slice(0));
        });
        it('Should have a callback to onHideColumn', () => {
          expect(typeof renderComponent().prop('onHideColumn')).to.equal('function');
        });
        it('Should have a callback to onShowColumn', () => {
          expect(typeof renderComponent().prop('onShowColumn')).to.equal('function');
        });
      });
    });
  });
  describe('ComponentWillReceiveProps', () => {
    describe('Updated Props', () => {
      it('Should update the hidden columns', () => {
        expect(renderComponent().setProps({ hiddenColumns }).prop('hiddenColumns')).to.eql([...hiddenColumns]);
      });
      it('Should update the visible columns', () => {
        expect(renderComponent().setProps({ visibleColumns: [{ key: 'a', name: 'name-a', label: 'label-a' }] }).prop('visibleColumns')).to.eql([{ key: 'a', name: 'name-a', label: 'label-a' }]);
      });
    });
  });
});
