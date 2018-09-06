import React from 'react'

import { withComponentsConsumer } from '../ComponentsContext'

import { KanbanProvider } from './KanbanContext'
import KanbanColumn from './KanbanColumn'

const Kanban = ({ components: { DragDropProvider } }) => (
  <KanbanProvider>
    <DragDropProvider>
      <KanbanColumn status={0} />
      <KanbanColumn status={1} />
      <KanbanColumn status={2} />
    </DragDropProvider>
  </KanbanProvider>
)

export default withComponentsConsumer(Kanban)
