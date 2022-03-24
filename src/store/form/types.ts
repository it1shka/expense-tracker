export interface FormState {
  name: string
  cost: string
}

export const enum FormActionType {
  SET_NAME = 'FORM/SET_NAME',
  SET_COST = 'FORM/SET_COST',
  CLEAR_FORM = 'FORM/CLEAR_FORM'
}

export interface SetNameAction {
  type: FormActionType.SET_NAME
  payload: string
}

export interface SetCostAction {
  type: FormActionType.SET_COST
  payload: string
}

export interface ClearFormAction {
  type: FormActionType.CLEAR_FORM
}

export type FormAction = 
  | SetNameAction
  | SetCostAction
  | ClearFormAction