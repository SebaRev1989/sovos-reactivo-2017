import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'fusionui-shared-components-react';
import ColumnList from './components/columnList/ColumnList';
import { violet, neutralWhite } from '../../../theme/PhoenixColors';
import './columnsSelector.scss';

class ColumnSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleColumns: this.props.visibleColumns,
      hiddenColumns: this.props.hiddenColumns
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.updatingTableOptions !== this.props.updatingTableOptions && nextProps.updatingTableOptions === false) {
      this.props.onSaveChangesSuccess();
      this.props.onClose();
    }
  }

  handleOnDrop = (dndInfo) => {
    const visibleColumns = [...this.state.visibleColumns];
    const hiddenColumns = [...this.state.hiddenColumns];
    const origin = dndInfo.origin;
    const target = dndInfo.target;
    const draggedColumn = origin.isEnabled ? this.state.visibleColumns[origin.position] : this.state.hiddenColumns[origin.position];

    if (origin.isEnabled) {
      visibleColumns.splice(origin.position, 1);
    } else {
      hiddenColumns.splice(origin.position, 1);
    }

    if (target.isEnabled) {
      if (!draggedColumn.isEnabled) draggedColumn.isEnabled = true;
      visibleColumns.splice(target.position, 0, draggedColumn);
    } else {
      if (draggedColumn.isEnabled) draggedColumn.isEnabled = false;
      hiddenColumns.splice(target.position, 0, draggedColumn);
    }

    visibleColumns.forEach((column, idx) => { column.order = idx; });
    hiddenColumns.forEach((column, idx) => { column.order = idx; });

    this.setState({ visibleColumns, hiddenColumns });
  }

  hideColumn = (column) => {
    if (this.state.visibleColumns.length > 1) {
      const hiddenColumns = [...this.state.hiddenColumns];
      column.order = hiddenColumns.length;
      column.isEnabled = !column.isEnabled;
      hiddenColumns.push(column);
      this.setState({
        hiddenColumns,
        visibleColumns: this.state.visibleColumns.filter(columnElement => (columnElement.key !== column.key))
      });
    }
  };

  showColumn = (column) => {
    const visibleColumns = [...this.state.visibleColumns];
    column.order = visibleColumns.length;
    column.isEnabled = !column.isEnabled;
    visibleColumns.push(column);
    this.setState({
      visibleColumns,
      hiddenColumns: this.state.hiddenColumns.filter(columnElement => (columnElement.key !== column.key))
    });
  };

  handleSaveColumns = () => {
    const orderedFields = {};
    this.state.visibleColumns.forEach((column, index) => {
      orderedFields[column.name] = {
        showOnSearch: column.isEnabled,
        order: index
      };
    });
    this.state.hiddenColumns.forEach((column, index) => {
      orderedFields[column.name] = {
        showOnSearch: column.isEnabled,
        order: index
      };
    });
    this.props.actions.updateColumnSelectorOptions(this.props.fchar, orderedFields);
    this.props.actions.resetTableOptions(this.props.fchar);
  };

  render() {
    const { onClose } = this.props;
    return (
      <div>
        <div className="column-selector__buttons-container">
          <RaisedButton label="APPLY" backgroundColor={ violet } labelColor={ neutralWhite } onTouchTap={ this.handleSaveColumns } />
          <RaisedButton label="CANCEL" backgroundColor={ neutralWhite } labelColor={ violet } onTouchTap={ onClose } />
        </div>
        <ColumnList
          visibleColumns={ this.state.visibleColumns }
          hiddenColumns={ this.state.hiddenColumns }
          onShowColumn={ this.showColumn }
          onHideColumn={ this.hideColumn }
          onDrop={ this.handleOnDrop }
        />
      </div>
    );
  }
}

ColumnSelector.propTypes = {
  visibleColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  hiddenColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func,
  fchar: PropTypes.string.isRequired,
  updatingTableOptions: PropTypes.bool.isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    updateColumnSelectorOptions: PropTypes.func,
    resetTableOptions: PropTypes.func
  }).isRequired
};

ColumnSelector.defaultProps = {
  onClose: () => null
};

export default ColumnSelector;
