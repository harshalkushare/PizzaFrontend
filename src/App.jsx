import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>
       </Routes>
    </>
  )
}

export default App
