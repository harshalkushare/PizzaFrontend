import { useState } from "react"
import toast from "react-hot-toast";
import LoginPresentation from "./LoginPresentation.jsx";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/slices/AuthSlice.js";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginState , setLoginState] = useState({
        email:'',
        password:""
    });

    function handleUserInput(e){
        const {name,value} = e.target;
        setLoginState({
         ...loginState,
         [name]:value
        })
     }

     async function handleFormSubmit(e){
        e.preventDefault();
        console.log(loginState);

        if(!loginState.email || !loginState.password){
            toast.error("Missing value from form")
            return;
        }

        if(!loginState.email.includes('@')||!loginState.email.includes(".")){
            toast.error("Invalid Email")
            return;
        }

       const apiResponse = await dispatch(login(loginState));
       if(apiResponse.payload.data.success){
        navigate('/');
       }
       console.log("Api response is",apiResponse);
    }

  return (
    <>
         <LoginPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput} />
    </>
  )
}

export default Login