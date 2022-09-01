import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import theme from './styles/theme'
import store from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact, Home } from './pages'
import { Header, Footer, Sidebar } from './components'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
