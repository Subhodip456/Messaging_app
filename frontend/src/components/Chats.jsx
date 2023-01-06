import React, {useState,useEffect,useContext} from "react";
import {ChatContext} from '../Context/chatContext'
import axios from "axios"

const Chats = () => {
  const {Name} = useContext(ChatContext)
  // const {userImage} = useContext(ChatContext)
  // const {handleKey} = useContext(ChatContext)
  // const {search} = useContext(ChatContext)
  const {username} = useContext(ChatContext)
  const {handleChat} = useContext(ChatContext)
  const {messages} = useContext(ChatContext)
  const [chat, setChat] = useState([])
  const {userID} = useContext(ChatContext)

  // const {data} = useContext(ChatContext)
  
  useEffect(() => {
    const getChat = async () => {
      try{
        const req = await axios.post("http://localhost:2500/Searchuser",{
          Name:username
        })
        // console.log("request =>",req.data)
        setChat(req.data)
      }
      catch(err){
        console.error("error occured",err)
      }
    };

    userID && getChat();
  }, [userID]);
  
  
// useEffect(()=>{
//   handleKey();
// },[username])

  const msg = messages.map((m)=>{
  //  console.log("Name =",Name)
  //  console.log("m.chatName",m.chatName)
   if(m.chatName === Name){
    // console.log("works")
    return m.message
   }
   else{
    // console.log("Not works")
    return 
   }
  })

  // console.log("chat",chat)
  // console.log("chat.map((m)=>m.url)",chat.map((m)=>m.url))
  // console.log("Object.entries(chats)",Object.entries(chat))


  return (
    <div className='chats'>
      {Object.entries(chat).map((m)=>(<div className='userchat' onClick={handleChat}>
            <img src={m[1].url}alt=''></img>
            <div className="userChatinfo">
                <span>{m[1].Name}</span>
                <p>{msg}</p>
            </div>
      </div>))}
    </div>
  )
}

export default Chats
