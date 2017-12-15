import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import './DragSourceComponent.scss';

const style = {
  cursor: 'pointer'
};

const dragSource = {
  canDrag(props) {
    return !props.cantDrag;
  },
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      keyDragComponent: props.id,
      elementInfo: props.elementInfo
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      props.onEndDrag(item.keyDragComponent, dropResult.id);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class DragSourceComponent extends Component {
  render() {
    const { children, isDragging, connectDragSource } = this.props;
    const containerStyle = { ...style, opacity: isDragging ? 0.4 : 1 };
    return connectDragSource(
      <div className="drag-source-component__container" style={ containerStyle }>
        <div className="drag-source-component__drag-icon">
          <svg style={ { width: 24, height: 24 } } viewBox="0 0 24 24">
            <path fill="#000000" d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z" />
          </svg>
        </div>
        <div className="drag-source-component__children-container">
          { children }
        </div>
      </div>
    );
  }
}

DragSourceComponent.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  onEndDrag: PropTypes.func.isRequired, // eslint-disable-line
  children: PropTypes.element
};

DragSourceComponent.defaultProps = {
  children: <span />
};

export default DragSource(props => props.itemType, dragSource, collect)(DragSourceComponent);
