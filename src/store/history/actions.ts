import { AddHistoryRecordAction, HistoryActionType, HistoryRecord } from "./types";

export function addHistoryRecord(
  record: HistoryRecord
): AddHistoryRecordAction {
  return {
    type: HistoryActionType.ADD_RECORD,
    payload: record
  }
}