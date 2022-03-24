import { BalanceAction, BalanceActionType, BalanceState } from "./types";

const defaultBalanceState: BalanceState = {
  income: 0,
  expense: 0
}

const balanceReducer = (
  state = defaultBalanceState,
  action: BalanceAction
): BalanceState => {
  switch(action.type) {
    case BalanceActionType.ALTER_EXPENSE:
      return {
        ...state,
        expense: state.expense + action.payload
      }
    case BalanceActionType.ALTER_INCOME:
      return {
        ...state,
        income: state.income + action.payload
      }
    default:
      return state
  }
}

export default balanceReducer