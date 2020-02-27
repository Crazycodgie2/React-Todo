import React from "react"
import "../styles/todo.css"
import App from "../redux/App"
import Todo from "./header"

export default props => {
  return (
    <App>
      <Todo />
    </App>
  )
}
