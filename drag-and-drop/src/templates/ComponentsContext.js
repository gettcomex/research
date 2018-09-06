import React, { createContext } from 'react'

const { Provider, Consumer } = createContext({})

export const ComponentsProvider = Provider

export const withComponentsConsumer = (WrappedComponent) => (props) => (
  <Consumer>
    {(componentsProps) => (
      <WrappedComponent
        {...componentsProps}
        {...props}
      />
    )}
  </Consumer>
)
