import { FormAction, FormActionType, FormState } from "./types";

const defaultFormState: FormState = {
  name: '',
  cost: '0'
}

const formReducer = (
  state = defaultFormState,
  action: FormAction
): FormState => {
  switch(action.type) {
    case FormActionType.CLEAR_FORM:
      return {...defaultFormState}
    case FormActionType.SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    case FormActionType.SET_COST:
      return {
        ...state,
        cost: action.payload
      }
    default:
      return state
  }
}

export default formReducer