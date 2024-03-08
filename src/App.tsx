import { ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom"
import { defaultTheme } from "./styles/theme/default"
import GlobalStyle from "./styles/global"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { router } from "./Router"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <RouterProvider router={router} />
      <ToastContainer/>
    </ThemeProvider>
  )
}

export default App
