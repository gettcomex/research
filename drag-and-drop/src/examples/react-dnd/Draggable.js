import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'

const dragSourceNode = {
  beginDrag({ item }) {
    return {
      item,
    }
  },
  endDrag({ onDragEnd, item }, monitor) {
    if (!monitor.didDrop()) return

    onDragEnd({
      draggable: item,
      destination: monitor.getDropResult(),
    })
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

class Draggable extends Component {
  render() {
    const { isDragging, connectDragSource, children } = this.props

    return connectDragSource((
      <div>
        {children({ isDragging })}
      </div>
    ))
  }
}

export default DragSource(
  ItemTypes.THING,
  dragSourceNode,
  collect,
)(Draggable)
