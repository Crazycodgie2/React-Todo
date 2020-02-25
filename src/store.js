import { createStore } from "redux"

import exampleReducer from "./reducers/example"

const store = createStore(exampleReducer)

export default store
