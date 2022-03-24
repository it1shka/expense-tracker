import { ClearFormAction, FormActionType, SetCostAction, SetNameAction } from "./types";

export function clearForm(): ClearFormAction {
  return {
    type: FormActionType.CLEAR_FORM
  }
}

export function setName(
  name: string
): SetNameAction {
  return {
    type: FormActionType.SET_NAME,
    payload: name
  }
}

export function setCost(
  cost: string
): SetCostAction {
  return {
    type: FormActionType.SET_COST,
    payload: cost
  }
}