import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"
import Notfound from "./pages/Notfound"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>


        <Route path="*" element={<Notfound/>}/>
       </Routes>
    </>
  )
}

export default App
