const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload }
    case "GET_TODOS":

    case "ADD_TODOS":
      return { ...state, todos: [...state.todos, action.payload] }
    case "DELETE_TODOS":
      return {
        ...state,
        todos: state.todos.filter(todos => todos.id !== action.payload)
      }
    default:
      return state
  }
}
