import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import { GlobalStyle } from "./components/styles/GlobalStyle"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
