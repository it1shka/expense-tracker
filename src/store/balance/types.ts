export interface BalanceState {
  income: number
  expense: number
}

export const enum BalanceActionType {
  ALTER_INCOME = 'BALANCE/ALTER_INCOME',
  ALTER_EXPENSE = 'BALANCE/ALTER_EXPENSE'
}

export interface AlterIncomeAction {
  type: BalanceActionType.ALTER_INCOME
  payload: number
}

export interface AlterExpenseAction {
  type: BalanceActionType.ALTER_EXPENSE
  payload: number
}

export type BalanceAction = 
  | AlterIncomeAction
  | AlterExpenseAction