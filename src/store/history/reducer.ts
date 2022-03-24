import { HistoryAction, HistoryActionType, HistoryState } from "./types";

const defaultHistoryState: HistoryState = {
  records: [
    // {
    //   id: 0,
    //   name: 'Cash 1',
    //   cost: 100
    // },
    // {
    //   id: 1,
    //   name: 'Cash 2',
    //   cost: 250
    // },
    // {
    //   id: 2,
    //   name: 'Car',
    //   cost: -1000
    // }
  ]
}

const historyReducer = (
  state = defaultHistoryState,
  action: HistoryAction
): HistoryState => {
  switch(action.type) {
    case HistoryActionType.ADD_RECORD:
      return {
        ...state,
        records: [...state.records, action.payload]
      }
    default:
      return state
  }
}

export default historyReducer