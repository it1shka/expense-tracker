import type { FormEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootDispatch, RootState } from '../store'
import { alterExpense, alterIncome } from '../store/balance/actions'
import { clearForm, setCost, setName } from '../store/form/actions'
import { addHistoryRecord } from '../store/history/actions'
import { HistoryRecord } from '../store/history/types'

const AddRecord = () => {
  const dispatch = useDispatch<RootDispatch>()
  const {name, cost} = useSelector((state: RootState) => {
    return state.form
  })

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const delta = Number(cost)
    const record: HistoryRecord = {
      id: Date.now(),
      name, cost: delta
    }
    
    dispatch(addHistoryRecord(record))
    if(delta >= 0) {
      dispatch(alterIncome(delta))
    } else {
      dispatch(alterExpense(Math.abs(delta)))
    }
    dispatch(clearForm())
  }

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.value
    dispatch(setName(name))
  }

  const handleCostChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const cost = event.target.value
    dispatch(setCost(cost))
  }

  return (
    <div>
      <h2>Add record</h2>
      <StyledForm onSubmit={handleSubmit}>
        <Input required
          type='text'
          placeholder='Name...'
          value={name}
          onChange={handleNameChange} 
        />
        <Input required
          type='number'
          placeholder='Cost'
          step='50'
          value={cost}
          onChange={handleCostChange}
        />
        <Add type='submit'>
          Add
        </Add>
      </StyledForm>
    </div>
  )
}

const Add = styled.button`
  margin-top: 1em;
  border: none;
  padding: 0.2em 0.5em;
  background-color: #ccc;
  &:hover {
    background-color: #c4c4c4;
  }
`

const Input = styled.input`
  border: none;
  outline: none;
  font-size: inherit;
  padding: 0.5em 1em;
  margin-top: 0.75em;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default AddRecord