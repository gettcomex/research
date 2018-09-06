import React, { Component, createContext } from 'react'
import _ from 'lodash'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const getItems = length => Array.from({ length }, (_, index) => ({
  id: index,
  content: `--${index}--`,
  status: getRandomInt(0, 3),
}))

const Context = createContext({
  draggables: [],
  getOrderByFilter: () => {},
})

export class KanbanProvider extends Component {
  state = {
    draggables: getItems(10),
    getOrderByFilter: this.getOrderByFilter,
  };

  getOrderByFilter = filter => _.groupBy(this.state.draggables, 'status')[filter] || [];

  updateDraggable = draggable => {
    this.setState(({ draggables }) => ({
      draggables: draggables.map(currentDraggable => {
        if (currentDraggable.id === draggable.id) {
          return _.merge(currentDraggable, draggable)
        }

        return currentDraggable
      }),
    }))
  }

  render() {
    const { children } = this.props

    const value = {
      ...this.state,
      updateDraggable: this.updateDraggable,
      getOrderByFilter: this.getOrderByFilter,
    }

    return (
      <Context.Provider value={value}>{children}</Context.Provider>
    )
  }
}

export const { Consumer: KanbanConsumer } = Context

export const withKanban = (WrappedComponent) => (props) => (
  <KanbanConsumer>
    {(kanbanProps) => (
      <WrappedComponent
        {...kanbanProps}
        {...props}
      />
    )}
  </KanbanConsumer>
)
