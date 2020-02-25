import axios from "axios"
import store from "../store"

export function getTodos() {
  axios.get("/todos").then(resp => {
    store.dispatch({
      type: "GET_TODOS",
      payload: resp.data
    })
  })
}

export function addTodo(name) {
  axios.post("/todos", { name }).then(resp => {
    getTodos()
  })
}
