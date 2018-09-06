import React from 'react'
import styled from 'styled-components'

import { withComponentsConsumer } from '../ComponentsContext'

const KanbanIssueStyled = styled.div`
  color: ${({ isDragging }) => (isDragging ? 'yellow' : 'black')};
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`

const KanbanIssueDraggable = ({
  components: {
    Draggable,
  },
  index,
  item,
  updateDraggable,
}) => (
  <Draggable
    key={item.id}
    index={index}
    item={item}
    onDragEnd={({ draggable, destination }) => {
      updateDraggable({
        ...draggable,
        status: destination.droppableId,
      })
    }}
  >
    {({ isDragging }) => (
      <KanbanIssueStyled isDragging={isDragging}>
        {item.content}
      </KanbanIssueStyled>
    )}
  </Draggable>
)

export default withComponentsConsumer(KanbanIssueDraggable)
