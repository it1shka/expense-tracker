import styled from 'styled-components'
import AddRecord from './components/AddRecord'
import Balance from './components/Balance'
import History from './components/History'

const App = () => {
  return (
    <AppContainer>
      <Title>Expense Tracker</Title>
      <Balance />
      <History />
      <AddRecord />
    </AppContainer>
  )
}

const Title = styled.h2`
  text-align: center;
  margin: 2em 0;
`

const AppContainer = styled.main`
  max-width: 380px;
  margin: 0 auto;
`

export default App