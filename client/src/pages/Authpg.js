
import React, { useState } from 'react'
import {Login} from '../components/Auth/Login'
import {Register} from '../components/Auth/Register'
import './authpg.css'

const Authpg = () => {
    const[currentForm,setCurrentForm]=useState('login')

    const toggleForm=(formName)=>{
        setCurrentForm(formName)
    }
  return (
    <div className='auth'>
        { 
        currentForm==='login'?
            <Login onFormSwitch={toggleForm}/>
            :
            <Register onFormSwitch={toggleForm}/>
        }
    </div>
  )
}

export default Authpg
// import React,{ useState } from "react"
// import "./login.css"
// // import Resgister from "./Resgister"


// const Login = () =>{
// //   const[currentForm,setCurrentForm]=useState('login')

//   const[credentials, setCredentials]=useState({        
//     email: '',
//     password: '',
// })

//     const handleInputChange =(e)=>{
//         setCredentials((prev)=>({
//             ...prev,
//             [e.target.id]:e.target.value
//         }))
//         // console.log(credentials)
//     }

//     const submitHandler = (e) =>{
//         e.preventDefault()
//     console.log(credentials)

//     }

//     return(
//         <>
//             <form onSubmit={submitHandler} className="login">
//                 <div className="lContainer">
//                     <input 
//                         type="email" 
//                         placeholder="email" 
//                         id="email" 
//                         onChange={handleInputChange} 
//                         className="lInput"
//                     />
//                     <input 
//                         type="password" 
//                         placeholder="password" 
//                         id="password" 
//                         onChange={handleInputChange} 
//                         className="lInput" 
//                     />
//                     <button type="submit" className="lButton">Login</button>
//                 </div>
//             </form>
//                 <button className="btn">Don't have an account? Register Here</button>
                
//             {/* <Resgister/> */}
//         </>
//     )
// }

// export default Login