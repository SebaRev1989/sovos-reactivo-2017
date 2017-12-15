import React from 'react';
import PropTypes from 'prop-types';
import { VisibleIcon, HiddenIcon } from '../../../svgIcons/SvgIcons'; // eslint-disable-line import/no-extraneous-dependencies
import SovosTooltip from '../../../../../shared/components/sovos-tooltip/SovosTooltip';
import { violet } from '../../../../../theme/PhoenixColors';
import ColumnListItem from './components/ColumnListItem';
import { ItemTypes, DragSourceComponent, WithDragDropContext } from '../../../../../shared/components/dragAndDrop';

const ColumnList = ({ visibleColumns, hiddenColumns, onShowColumn, onHideColumn, onDrop }) => {
  let switchInfo = {};

  const onDragAndDrop = (dragInfo) => {
    switchInfo = {
      origin: {
        isEnabled: dragInfo.origin,
        position: dragInfo.key
      },
      target: {
        isEnabled: dragInfo.container,
        position: dragInfo.target
      }
    };
  };

  const iconStyle = { height: 16, width: 16 };

  const getColumnItem = (column, index, visible) => (
    <div className="column-selector__column-row" key={ column.key }>
      <div>
        <SovosTooltip id={ `col-${index}` } label={ column.label }>
          <DragSourceComponent
            id={ index }
            onEndDrag={ () => { onDrop(switchInfo); } }
            itemType={ ItemTypes.DNDCOLUMNSELECTOR }
            elementInfo={ { isVisible: visible } }
            cantDrag={ visibleColumns.length === 1 }
          >
            <ColumnListItem
              column={ column }
              visible={ visible }
              onShowColumn={ onShowColumn }
              onHideColumn={ onHideColumn }
              onDragAndDrop={ onDragAndDrop }
            />
          </DragSourceComponent>
        </SovosTooltip>
      </div>
      <div className="column-selector__icon-container">
        {
          visible ?
            <VisibleIcon style={ iconStyle } color={ violet } onTouchTap={ () => { onHideColumn(column); } } /> :
            <HiddenIcon style={ iconStyle } color="#7d7d7d" onTouchTap={ () => { onShowColumn(column); } } />
        }
      </div>
    </div>
  );

  return (
    <div className="column-selector__columns-container">
      <div className="column-selector__column-group">
        { visibleColumns.map((columnName, index) => getColumnItem(columnName, index, true)) }
      </div>
      <hr />
      <div className="column-selector__column-group">
        { hiddenColumns.map((columnName, index) => getColumnItem(columnName, index, false)) }
      </div>
    </div>
  );
};

ColumnList.propTypes = {
  visibleColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  hiddenColumns: PropTypes.arrayOf(PropTypes.object),
  onHideColumn: PropTypes.func.isRequired,
  onShowColumn: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
};

ColumnList.defaultProps = {
  hiddenColumns: [],
};

export default WithDragDropContext(ColumnList);
