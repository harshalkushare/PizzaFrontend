import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"
import Notfound from "./pages/Notfound"
import Denied from "./pages/Denied"
import AddProduct from "./pages/Admin/AddProduct"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/denied" element={<Denied/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
        <Route path="/auth/login" element={<Login/>}/>


        <Route path="/admin/addProduct" element={<AddProduct/>}/>
        <Route path="*" element={<Notfound/>}/>
       </Routes>
    </>
  )
}

export default App
