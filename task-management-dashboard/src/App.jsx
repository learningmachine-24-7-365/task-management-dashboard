import { Routes, Route } from "react-router-dom"
import DetailPage from "./pages/detail"
import './stylesheet/reset.css'
import './stylesheet/global.css'
import './stylesheet/typeface.css'
import './stylesheet/color.css'
import './stylesheet/dimension.css'
import './stylesheet/style.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DetailPage />} />
    </Routes>
  )
}

export default App
