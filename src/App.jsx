import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
       </Routes>
    </>
  )
}

export default App
