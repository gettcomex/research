import React from 'react'
import { DragDropContextProvider as NativeDragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const DragDropProvider = (props) => (
  <NativeDragDropContextProvider
    backend={HTML5Backend}
    {...props}
  />
)

export default DragDropProvider
