import { ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom"
import { defaultTheme } from "./styles/theme/default"
import GlobalStyle from "./styles/global"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { router } from "./Router"
import { LoadingProvider } from "./contexts/useLoading"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoadingProvider>
        <GlobalStyle/>
        <RouterProvider router={router} />
        <ToastContainer/>
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App
