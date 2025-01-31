import { useState } from "react"
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";

//Container for Signup page
function Signup() {
    const [signUpState,setSignUpState] = useState({
        firstName:"",
        email:"",
        mobileNumber:"",
        password:""
    });

    function handleUserInput(e){
       const {name,value} = e.target;
       setSignUpState({
        ...signUpState,
        [name]:value
       })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(signUpState);

        if(!signUpState.firstName || !signUpState.mobileNumber || !signUpState.email || !signUpState.password){
            toast.error("Missing value from form")
            return;
        }

        if(!signUpState.email.includes('@')||!signUpState.email.includes(".")){
            toast.error("Invalid Email")
            return;
        }

        if(signUpState.firstName.length < 5 || signUpState.firstName.length > 20){
            toast.error("Name Characters at least 5 or maximum 20")
            return;
        }
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12){
            toast.error("Mobile Number should be between 10-12")
            return;
        }
    }

  return (
    <>
         <SignupPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput} />
    </>
  )
}

export default Signup