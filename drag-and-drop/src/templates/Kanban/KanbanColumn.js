import React from 'react'
import styled from 'styled-components'

import { withComponentsConsumer } from '../ComponentsContext'

import { KanbanConsumer } from './KanbanContext'
import KanbanIssue from './KanbanIssue'

const KanbanColumnStyled = styled.div`
  width: 50px;
  min-height: 50px;
  margin: 5px;
  padding: 10px;
  padding-bottom: 20px;
  background-color: red;
  float: left;
`

const KanbanColumn = ({
  components: {
    Droppable,
  },
  status,
}) => (
  <KanbanConsumer>
    {({ getOrderByFilter, updateDraggable }) => (
      <Droppable droppableId={status.toString()}>
        <KanbanColumnStyled>
          {getOrderByFilter(status).map((item, index) => (
            <KanbanIssue
              key={item.id}
              index={index}
              item={item}
              updateDraggable={updateDraggable}
            />
          ))}
        </KanbanColumnStyled>
      </Droppable>
    )}
  </KanbanConsumer>
)

export default withComponentsConsumer(KanbanColumn)
