import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../store'
import { formatAccount } from '../util'

const History = () => {
  const records = useSelector((state: RootState) => {
    return state.history.records
  })

  return (
    <div>
      <h2>History</h2>
      <Records>
        {records.length === 0 && (
          <RecordContainer>
            <h3>No items</h3>
          </RecordContainer>
        )}
        {
        [...records]
          .reverse()
          .slice(0, 3)
          .map((record, idx) => {
            return (
              <RecordContainer 
                key={idx} 
                income={record.cost > 0}
              >
                <h3>{record.name}</h3>
                <h3>{formatAccount(record.cost)}</h3>
              </RecordContainer>
            )
          })
        }
      </Records>
    </div>
  )
}

const RecordContainer = styled.li<{income?: boolean}>`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  margin: 0.2em 0;
  color: grey;
  border-right: 6px solid ${({income}) => (
    income
    ? '#bdffbd'
    : '#ffccbd'
  )};
`

const Records = styled.ul`
  list-style-type: none;
  background-color: white;
  margin: 1em 0%;
`

export default History