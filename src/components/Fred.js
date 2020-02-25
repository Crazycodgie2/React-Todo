import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getTodos } from "../actions/todos"

export default props => {
  const todos = useSelector(appState => appState.todos)

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <h1>todos</h1>
      {todos.map(todos => (
        <p>
          {todos.id}: {todos.name}
        </p>
      ))}
    </div>
  )
}
