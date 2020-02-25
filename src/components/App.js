import React, { useState } from "react"
import "../styles/todo.css"
import store from "../store"
import { Provider } from "react-redux"
import { addTodo } from "../actions/todos"
import Fred from "./Fred"

export default props => {
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    addTodo(name)
  }
  return (
    <Provider store={store}>
      <div>
        <Fred />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="John Smith"
            onChange={e => setName(e.target.value)}
          />
        </form>
      </div>
    </Provider>
  )
}
