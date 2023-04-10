import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/defaultTheme'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
