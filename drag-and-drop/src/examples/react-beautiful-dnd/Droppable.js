import React, { Component } from 'react'
import { Droppable as NativeDroppable } from 'react-beautiful-dnd'

class Droppable extends Component {
  render() {
    const { children, droppableId } = this.props

    return (
      <NativeDroppable droppableId={droppableId}>
        {({ innerRef }) => (
          <div ref={innerRef}>
            {children}
          </div>
        )}
      </NativeDroppable>
    )
  }
}

export default Droppable
