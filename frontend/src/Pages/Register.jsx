import React,{useState,useContext} from 'react'
import './style.css'
import Add from '../img/avatar.png'
import  axios from "axios"
import {useNavigate,Link} from "react-router-dom"



const Register = () => {

const [Names,setNames]=useState('')
const [Email,setEmail]=useState('')
const [Password,setPassword]=useState('')

const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    let payload = {
        Name:Names,
        Email:Email,
        Password:Password,
        lastRegisteredAt:new Date()
    }
    if(!(Names && Email && Password)){
      // console.log("payload.Names",payload.Names)
      // console.log("empty")
      alert(`Please fill the name email password`)
    }
    else{
      let db_resp = await axios.post("https://messaging-api.onrender.com/findreg",{
        Name:Names,
        Email:Email,
        Password:Password
      })
      // console.log("Data sent from react to node is ",payload);
      // console.log("response =",db_resp)
      if(db_resp.data.length!==0){
        // console.log("db_resp",db_resp)
        // console.log(db_resp.data)
        // console.log("duplicate request")
        alert("This email-id is already registered go to login")
        navigate("/login")
      }
      else
      {
        let response = await axios.post("https://messaging-api.onrender.com/Register",{
        Name:Names,
        Email:Email,
        Password:Password,
        lastRegisteredAt:new Date()
      })
      // console.log("data stored in db and response from node",response.data);
      alert("Welcome home")
      navigate("/home")
      }
    }
  } catch (error) {
    console.error(error);
  }
};
  
  return (
    <div className='form-Container'>
        <div className='form-Wrapper'>
            <form onSubmit={handleSubmit} className='form-class'>
                <span className='logo'><h1>MESSAGE APP</h1></span>
                <span><h3>REGISTER</h3></span>
                <input type='text' className='input-class' placeholder='Name' value={Names} onChange={(e)=>setNames(e.target.value)}></input>
                <input type='email' className='input-class' placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type='password' className='input-class' placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} ></input>
                <input style={{display:'none'}} type='file' id='file' placeholder='Add profile picture'></input>
                <label htmlFor='file' className='label-class'>
                  <img src={Add} alt=''></img>
                  <p className='p1'> Add profile picture</p>
                </label>
                <button className='button-class'>Sign-up</button>
            </form>
            <p className='p'> have an account?  <Link to="/login"><button className='button-signin'>Sign-in</button></Link></p>
        </div>
    </div>
  )
}

export default Register

//http://localhost:2500