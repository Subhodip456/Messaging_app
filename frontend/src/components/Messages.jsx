import React from 'react'
import Message from './Message'
// import axios from 'axios'
import { useContext } from 'react'
import { ChatContext } from '../Context/chatContext'


const Messages = () => {
  const {messages} = useContext(ChatContext)
  // const getMessage = async () =>{
  //   try{
  //     const req = await axios.get("http://localhost:2500/message")
  //     console.log("request =>",req.data)
  //     setMessage(req.data)
  //   }
  //   catch(err){
  //     console.error("error occured",err)
  //   }
  // }
  // useEffect(()=>{
  //   getMessage()
  // },[message])

  // console.log("messages=",messages)
  return (
    <div className='messages'>
      {messages.map((m) => (
    <Message messages={m} key={m.id} />
      ))}
    </div>
  )
}

export default Messages
