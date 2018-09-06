import React from 'react'
import styled from 'styled-components'

import ReactBeatifulDND from './react-beautiful-dnd'
import ReactDND from './react-dnd'

const ExamplesStyled = styled.div`
  display: flex;
  justify-content: space-around;
`

const Examples = () => (
  <ExamplesStyled>
    <ReactDND />
    <ReactBeatifulDND />
  </ExamplesStyled>
)

export default Examples
