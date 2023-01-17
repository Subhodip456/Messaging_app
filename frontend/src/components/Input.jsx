import React,{useContext} from 'react'
import Attach from "../img/attach.png"
import img from "../img/img.png"
import {ChatContext} from '../Context/chatContext'
// import axios from "axios"


const Input = () => {
  // const [message,setMessage] = useState('')
  // const [msg,setMsg] = useState(false)
  // const {Name} = useContext(ChatContext)
  // const handleSend = async () => {
  //   try{
  //     const req = await axios.post("http://localhost:2500/message",{
  //     message:message,
  //     chatName:Name
  //   })
  //   console.log("req",req.data)
  //   }
  //   catch(err){
  //     console.error("error occured",err)
  //   }
  //   setMsg(true)
  // }
  const {message,setMessage,handleSend} = useContext(ChatContext)
  return (
    <div className='input'>
      <input type="text" placeholder='Message...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <div className='send'>
        <img src={Attach} alt=''/>
        <input type="file" style={{display:"none"}} id="file"/>
          <label htmlFor='file'>
            <img src={img} alt=""/>
          </label>
          <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
