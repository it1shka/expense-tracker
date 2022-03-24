import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../store'
import { formatAccount } from '../util'

const Balance = () => {
  const {expense, income} = useSelector((state: RootState) => {
    return state.balance
  })
  
  const balance = formatAccount(income - expense)
  const exp = formatAccount(expense)
  const inc = formatAccount(income)

  return (
    <div>
      <div>
        <h3>Your balance is</h3>
        <h1>{balance}</h1>
      </div>

      <Panel>
        <Table type='green'>
          <h3>Income</h3>
          <h2>{inc}</h2>
        </Table>
        <Table type='red'>
          <h3>Expense</h3>
          <h2>{exp}</h2>
        </Table>
      </Panel>
    </div>
  )
}

type TableType = 'red' | 'green'
const Table = styled.div<{type: TableType}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  align-items: center;
  background-color: ${({type}) => (
    type === 'red'
    ? '#fff5f5'
    : '#f5fff7'
  )};
`

const Panel = styled.div`
  margin: 1.25em 0;
  display: flex;
  border-radius: 5px;
  box-shadow: #ccc 1px 1px 4px;
`

export default Balance