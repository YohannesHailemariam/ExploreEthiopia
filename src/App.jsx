import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
  )
}

export default App
