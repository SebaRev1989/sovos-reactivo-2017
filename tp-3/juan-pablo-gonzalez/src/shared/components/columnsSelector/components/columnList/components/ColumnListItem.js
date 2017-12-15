import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { primaryBlue } from '../../../../../../theme/PhoenixColors';
import { ItemTypes } from '../../../../../../shared/components/dragAndDrop';


const dropTarget = {
  hover(props, monitor) {
    props.onDragAndDrop({
      key: monitor.getItem().id,
      origin: monitor.getItem().elementInfo.isVisible,
      target: props.column.order,
      container: props.column.isEnabled
    });
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const ColumnListItem = ({ visible, column, connectDropTarget, isOver }) => connectDropTarget(
  <div
    className={ `column-selector__label column-selector__label_${(visible) ? 'visible' : 'hidden'}` }
    style={ { backgroundColor: isOver ? primaryBlue : 'inherit' } }
  >
    { column.label }
  </div>
);

ColumnListItem.propTypes = {
  onHideColumn: PropTypes.func.isRequired,
  onShowColumn: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onDragAndDrop: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.DNDCOLUMNSELECTOR, dropTarget, collect)(ColumnListItem);
