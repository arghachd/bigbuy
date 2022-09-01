import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import theme from './styles/theme'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>app</ThemeProvider>
    </Provider>
  )
}

export default App
