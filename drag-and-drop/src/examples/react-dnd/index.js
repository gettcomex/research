import React from 'react'

import { ComponentsProvider, Example, Title, KanbanTemplate } from '../example'
import DragDropProvider from './DragDropProvider'
import Draggable from './Draggable'
import Droppable from './Droppable'

const components = { DragDropProvider, Draggable, Droppable }

const ReactBeautifulDND = () => (
  <ComponentsProvider value={{ components }}>
    <Example>
      <Title>
        react-dnd
      </Title>
      <KanbanTemplate />
    </Example>
  </ComponentsProvider>
)

export default ReactBeautifulDND
