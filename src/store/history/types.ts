export interface HistoryRecord {
  id: number
  name: string
  cost: number
}

export interface HistoryState {
  records: HistoryRecord[]
}

export const enum HistoryActionType {
  ADD_RECORD = 'HISTORY/ADD_RECORD'
}

export interface AddHistoryRecordAction {
  type: HistoryActionType.ADD_RECORD
  payload: HistoryRecord
}

export type HistoryAction = 
  | AddHistoryRecordAction