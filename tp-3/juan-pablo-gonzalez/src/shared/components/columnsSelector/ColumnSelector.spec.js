import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ColumnSelector from './ColumnsSelector';
import { VisibleIcon, HiddenIcon } from '../svgIcons/SvgIcons';

const defaultVisibleColumns = [
  { key: 'a', name: 'name-a', order: 0, isEnabled: true, label: 'label-a' },
  { key: 'b', name: 'name-b', order: 1, isEnabled: true, label: 'label-b' },
  { key: 'c', name: 'name-c', order: 2, isEnabled: true, label: 'label-c' }
];
const defaultHiddenColumns = [
  { key: 'd', name: 'name-d', order: 0, isEnabled: false, label: 'label-d' },
  { key: 'e', name: 'name-e', order: 1, isEnabled: false, label: 'label-e' },
  { key: 'f', name: 'name-f', order: 2, isEnabled: false, label: 'label-f' }
];

const defaultProps = {
  visibleColumns: defaultVisibleColumns,
  hiddenColumns: defaultHiddenColumns,
  fchar: '1',
  onSaveChangesSuccess: () => null,
  updatingTableOptions: false,
  actions: {}
};

const renderComponent = (conf = {}) => {
  const props = Object.assign({}, defaultProps, conf);
  return mount(
    <ColumnSelector { ...props } />,
    { context: { muiTheme: getMuiTheme() }, childContextTypes: { muiTheme: PropTypes.object } }
  );
};

describe('ColumnSelector > ', () => {
  describe('ComponentDidMount > ', () => {
    describe('Default component > ', () => {
      describe('Children exists > ', () => {
        it('Should have an instance of ColumnSelector', () => {
          expect(renderComponent().exists()).to.be.true;
        });
        it('Should have three visibleIcons', () => {
          expect(renderComponent().find(VisibleIcon).length).to.equal(3);
        });
        it('Should have three hiddenIcons', () => {
          expect(renderComponent().find(HiddenIcon).length).to.equal(3);
        });
      });
      describe('Default Props > ', () => {
        it('Should have a callback to onClose', () => {
          expect(typeof renderComponent().prop('onClose')).to.equal('function');
        });
      });
      describe('Required Props > ', () => {
        it('Should have a list for visible columns', () => {
          expect(renderComponent().prop('visibleColumns')).to.eql(defaultVisibleColumns.slice(0));
        });
        it('Should have a list for hidden columns', () => {
          expect(renderComponent().prop('hiddenColumns')).to.eql(defaultHiddenColumns.slice(0));
        });
        it('Should have an fchar', () => {
          expect(renderComponent().prop('fchar')).to.equal('1');
        });
        it('Should have an updatingTableOptionsFlag', () => {
          expect(renderComponent().prop('updatingTableOptions')).to.equal(false);
        });
        it('Should have a callback to onSaveChangesSuccess', () => {
          expect(typeof renderComponent().prop('onSaveChangesSuccess')).to.equal('function');
        });
      });
      describe('Default State > ', () => {
        it('Should have visibleColumns as the props on the initial state', () => {
          expect(renderComponent().state('visibleColumns')).to.eql(defaultVisibleColumns.slice(0));
        });
        it('Should have hiddenColumns as the props on the initial state', () => {
          expect(renderComponent().state('hiddenColumns')).to.eql(defaultHiddenColumns.slice(0));
        });
      });
    });
  });
  describe('ComponentWillReceiveProps', () => {
    describe('Updated Props', () => {
      let onSaveChangesSuccess;
      let onClose;
      beforeEach(() => {
        onSaveChangesSuccess = sinon.spy();
        onClose = sinon.spy();
        renderComponent({
          onClose,
          onSaveChangesSuccess
        }).setProps({ updatingTableOptions: true }).setProps({ updatingTableOptions: false });
      });
      it('Should call onClose after updating flag', () => {
        expect(onClose.callCount).to.equal(1);
      });
      it('Should call onSaveChangesSuccess after updating flag', () => {
        expect(onSaveChangesSuccess.callCount).to.equal(1);
      });
    });
    describe('Triggered events > ', () => {
      let actions;
      let component;
      beforeEach(() => {
        const updateColumnSelectorOptions = sinon.spy();
        const resetTableOptions = sinon.spy();
        actions = { updateColumnSelectorOptions, resetTableOptions };
        component = renderComponent({ actions });
      });
      it('Should hide a column when calling hideColumn', () => {
        component.instance().hideColumn({ key: 'a', name: 'name-a', isEnabled: true, label: 'label-a' });
        expect(component.state().visibleColumns.length).to.equal(2);
        expect(component.state().hiddenColumns.length).to.equal(4);
      });
      it('Should show a column when calling showColumn', () => {
        component.instance().showColumn({ key: 'd', name: 'name-d', isEnabled: false, label: 'label-d' });
        expect(component.state().visibleColumns.length).to.equal(4);
        expect(component.state().hiddenColumns.length).to.equal(2);
      });
      it('Should not allow to empty all the visible columns', () => {
        component.instance().hideColumn({ key: 'a', name: 'name-a', isEnabled: true, label: 'label-a' });
        component.instance().hideColumn({ key: 'b', name: 'name-b', isEnabled: true, label: 'label-b' });
        component.instance().hideColumn({ key: 'c', name: 'name-c', isEnabled: true, label: 'label-c' });
        expect(component.state().visibleColumns.length).to.equal(1);
        expect(component.state().visibleColumns[0].key).to.equal('c');
        expect(component.state().hiddenColumns.length).to.equal(5);
      });
      it('Should allow to empty all the hidden columns', () => {
        component.instance().showColumn({ key: 'd', name: 'name-d', isEnabled: false, label: 'label-d' });
        component.instance().showColumn({ key: 'e', name: 'name-e', isEnabled: false, label: 'label-e' });
        component.instance().showColumn({ key: 'f', name: 'name-f', isEnabled: false, label: 'label-f' });
        expect(component.state().visibleColumns.length).to.equal(6);
        expect(component.state().hiddenColumns.length).to.equal(0);
      });
      it('Should send the orderedFields when changes apply', () => {
        component.instance().hideColumn({ key: 'a', name: 'name-a', isEnabled: true, label: 'label-a' });
        component.instance().handleSaveColumns();
        expect(actions.updateColumnSelectorOptions.calledOnce).to.be.true;
        expect(actions.updateColumnSelectorOptions.args[0][1]['name-a'].showOnSearch).to.be.false;
      });
      it('Should reset the table options for that fchar', () => {
        component.instance().hideColumn({ key: 'a', name: 'name-a', isEnabled: true, label: 'label-a' });
        component.instance().handleSaveColumns();
        expect(actions.resetTableOptions.calledOnce).to.be.true;
        expect(actions.resetTableOptions.args[0][0]).to.equal('1');
      });
    });
  });
});
