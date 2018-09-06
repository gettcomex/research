import React from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './constants'

const dropTarget = {
  drop({ droppableId }) {
    return { droppableId }
  },
}

const collect = (connect) => ({
  connectDropTarget: connect.dropTarget(),
})

const Droppable = ({ children, connectDropTarget }) => connectDropTarget((
  <div>
    {children}
  </div>
))

export default DropTarget(ItemTypes.THING, dropTarget, collect)(Droppable)
