import { BrowserRouter } from "react-router-dom"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Main/>
        <Footer/>
      </BrowserRouter>
  )
}

export default App