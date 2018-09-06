import React, { PureComponent } from 'react'
import { Draggable as NativeDraggable } from 'react-beautiful-dnd'

class Draggable extends PureComponent {
  render() {
    const { item, index, children } = this.props

    return (
      <NativeDraggable draggableId={item.id} index={index}>
        {(provided, { isDragging }) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
            {children({ isDragging })}
          </div>
        )}
      </NativeDraggable>
    )
  }
}

export default Draggable
