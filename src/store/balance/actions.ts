import { AlterExpenseAction, AlterIncomeAction, BalanceActionType } from "./types";

export function alterExpense(
  inc: number
): AlterExpenseAction {
  return {
    type: BalanceActionType.ALTER_EXPENSE,
    payload: inc
  }
}

export function alterIncome(
  inc: number
): AlterIncomeAction {
  return {
    type: BalanceActionType.ALTER_INCOME,
    payload: inc
  }
}