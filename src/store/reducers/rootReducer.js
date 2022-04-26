import { combineReducers } from "redux"

import { tasksReducer } from "./tasksReducer"

const rootReducer = combineReducers({
   tasksReducer,
})

export default rootReducer
