import React,{useState} from 'react'
import './style.css'
import  axios from "axios"
import {useNavigate,Link} from "react-router-dom"
import Profilepicture from '../components/Profilepicture'
import {ChatContext} from '../Context/chatContext'
import hh from '../img/hh.png'



const Register = ({register}) => {

const [Names,setNames]=useState('')
const [Email,setEmail]=useState('')
const [Password,setPassword]=useState('')
const [image,setimage] = useState(hh)

const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  try {

    if(!(Names && Email && Password)){
      alert(`Please fill the name email password`)
    }
    else{
      let db_resp = await axios.post("https://messaging-api.onrender.com/findreg",{
        Name:Names,
        Email:Email,
        Password:Password
      })
      if(db_resp.data.length!==0){
        alert("This email-id is already registered go to login")
        navigate("/login")
      }
      else
      {
        let response = await axios.post("https://messaging-api.onrender.com/Register",{
        Name:Names,
        Email:Email,
        Password:Password,
        image:image,
        lastRegisteredAt:new Date()
      })
      register()
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
                <ChatContext.Provider value={{image,setimage}}>
                  <Profilepicture/>
                </ChatContext.Provider>
                <button className='button-class'>Sign-up</button>
            </form>
            <p className='p'> have an account?  <Link to="/login"><button className='button-signin'>Sign-in</button></Link></p>
        </div>
    </div>
  )
}

export default Register

//http://localhost:2500
// console.log("db_resp",db_resp)
// console.log(db_resp.data)
// console.log("duplicate request")
// let payload = {
//     Name:Names,
//     Email:Email,
//     Password:Password,
//     lastRegisteredAt:new Date()
// }
// console.log("payload.Names",payload.Names)
// console.log("empty")
// console.log("Data sent from react to node is ",payload);
// console.log("response =",db_resp)
// console.log("data stored in db and response from node",response.data);
// import Add from '../img/avatar.png'