import React from 'react'
import styled from 'styled-components'

import Kanban from '../templates/Kanban'

export { ComponentsProvider } from '../templates/ComponentsContext'

export const Example = 'div'

export const Title = 'h1'

export const Template = styled.div`
  display: inline-flex;
  background-color: gray;
`

export const KanbanTemplate = (props) => (
  <Template>
    <Kanban {...props} />
  </Template>
)
