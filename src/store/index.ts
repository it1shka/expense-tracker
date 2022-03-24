import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";
import historyReducer from "./history/reducer";
import formReducer from "./form/reducer";

const rootReducer = combineReducers({
  balance: balanceReducer,
  history: historyReducer,
  form: formReducer
})
const store = createStore(rootReducer)
export default store

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch