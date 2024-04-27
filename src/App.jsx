import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Test from "./test/Test"
import ListAnime from "./Pages/ListAnime"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listanime" element={<ListAnime/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
