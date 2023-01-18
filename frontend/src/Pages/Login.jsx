import React,{useState} from 'react'
import './style.css'
import {useNavigate,Link} from "react-router-dom"
import axios from "axios"


const Login = ({login}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    let payload = {
      Email:email,
      Password:password
    }
    if(!(payload.Email && payload.Password)){
      // console.log("empty")
      alert(`Please fill the email password`)
    }
    else{
    let res_login = await axios.post("https://messaging-api.onrender.com/login",{
      Email:email,
      Password:password
    })
    // console.log("Data sent from react to node is ",payload);
    // console.log("Response",res_login)
      if(res_login.data.length!==0){
        // console.log(res_login.data)
        login()
        alert("Welcome home")
        navigate("/home")
      }
      else
      {
      alert("In-correct email or password");
      }
    }
  }
  catch(err){
  console.error(err)
  }
  }
  return (
    <div className='form-Container'>
        <div className='form-Wrapper'>
            <form className='form-class' onSubmit={handleSubmit}>
                <span className='logo'><h1>MESSAGE APP</h1></span>
                <span><h3>LOGIN</h3></span>
                <input type='email' className='input-class' placeholder='Email' value = {email} onChange={(e)=>setEmail(e.target.value)} ></input>
                <input type='password' className='input-class' placeholder='Password' value = {password} onChange={(e)=>setPassword(e.target.value)} ></input>
                <button className='button-class'>Sign-in</button>
            </form>
            <p className='p'>You don't have an account?   <Link to="/"><button className='button-signin'>Sign-up</button></Link></p>
        </div>
    </div>
  )
}

export default Login
