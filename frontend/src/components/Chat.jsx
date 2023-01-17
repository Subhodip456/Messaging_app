import React,{useContext,useState} from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
import {ChatContext} from '../Context/chatContext'
import axios from "axios"



const Chat = () => {
  // const {search} = useContext(ChatContext)
  const {Name} = useContext(ChatContext)
  const {userImage} = useContext(ChatContext)
  // const {chats} = useContext(ChatContext)
  const [message,setMessage] = useState('')
  const {messages,setMessages,getMessage} = useContext(ChatContext)
  const {data} = useContext(ChatContext)
  // const getMessage = async () =>{
  //   try{
  //     const req = await axios.get("http://localhost:2500/message")
  //     console.log("request =>",req.data)
  //     setMessages(req.data)
  //   }
  //   catch(err){
  //     console.error("error occured",err)
  //   }
  // }
  const handleSend = async () => {
    // console.log("message at chat",message)
    // console.log("Name",Name)
    try{
      const req = await axios.post("http://localhost:2500/message",{
      message:message,
      chatName:Name
    })
    // console.log("req",req.data)
    }
    catch(err){
      console.error("error occured",err)
    }
    getMessage()
  }

  // console.log("data chats",data)

  return (
    <div className='chat'>
      <div className="chatInfo">
      <img src={userImage} alt=''></img>
        <span>{Name}</span>
        <div className="chatIcons">
          <img src={Cam} alt=""></img>
          <img src={Add} alt=""></img>
          <img src={More} alt=""></img>
        </div>
      </div>
      <ChatContext.Provider value={{userImage,Name,message,setMessage,handleSend,messages,setMessages}}>
        <Messages/>
        <Input/>
      </ChatContext.Provider>
    </div>
  )
}

export default Chat
