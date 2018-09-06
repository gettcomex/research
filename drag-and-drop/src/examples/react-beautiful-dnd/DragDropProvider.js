import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { withKanban } from '../../templates/Kanban/KanbanContext'

class DragDropProvider extends Component {
  onDragEnd = result => {
    const { source, destination } = result

    if (!destination || source.droppableId === destination.droppableId) {
      return
    }

    const sourceFilter = +source.droppableId
    const destinationFilter = +destination.droppableId

    const draggable = this.props.getOrderByFilter(sourceFilter)[source.index]

    this.props.updateDraggable({
      ...draggable,
      status: destinationFilter,
    })
  }

  render() {
    const { children } = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {children}
      </DragDropContext>
    )
  }
}

export default withKanban(DragDropProvider)
