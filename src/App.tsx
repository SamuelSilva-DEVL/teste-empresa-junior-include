import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/defaultTheme'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
