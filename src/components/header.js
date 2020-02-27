import React, { useState, useRef } from "react"
import { useTodos } from "../hooks"

export default props => {
  const { todos, add, del, toggle, count, filter, clear } = useTodos("")
  const [todo, setTodo] = useState("")
  const [view, setView] = useState("all")
  // const inputEl = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    add(todo)
    setTodo("")
    // inputEl.current.focus()
  }

  function changeView(status) {
    setView(status)
    filter(status)
  }

  return (
    <div className="wrapper">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Go shopping..."
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add to list</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={"todo" + todo.id}
            className={todo.status === "completed" ? "completed" : ""}
            onClick={e => toggle(todo.id)}
          >
            {todo.text} <button onClick={e => del(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <p>Count: {count} items left</p>
      <div>
        <label htmlFor="all">All</label>
        <input
          checked={view === "all" ? true : false}
          onChange={e => changeView("all")}
          name="view"
          id="all"
          type="radio"
        />
        <br />
        <label htmlFor="completed">Completed</label>
        <input
          checked={view === "completed" ? true : false}
          onChange={e => changeView("completed")}
          name="view"
          id="completed"
          type="radio"
        />
      </div>
      <button onClick={e => clear()}>Clear Completed</button>
    </div>
  )
}
