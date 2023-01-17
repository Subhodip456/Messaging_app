import React,{useState} from 'react'
import './style.css'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import {ChatContext} from '../Context/chatContext'
import axios from 'axios'
// import { useContext } from 'react'



const Home = () => {
  const [username,setUsername] = useState("")
  var   [userImage,setuserImage] = useState(null)
  const [search , setSearch] = useState(false)
  const [Name,setName] = useState("")
  const [chats,setChats] = useState(null);
  const [messages,setMessages] = useState([])
  const [data,setData] = useState([])
  const [user,setuser] = useState([])
  const [userID,setuserID] = useState([])


  const getMessage = async () =>{
    try{
      const req = await axios.get("http://localhost:2500/message")
      // console.log("request =>",req.data)
      setMessages(req.data)
    }
    catch(err){
      console.error("error occured",err)
    }
  }

  const handleSearch = async () => {
    
    try{
      // return username
    var res_register = await axios.post("http://localhost:2500/Searchuser",{
      Name:username
    })
    if(res_register.data.length!==0){
      setSearch(true)
    }
    else{
      setSearch(false)
    }
      // console.log("res_register.data",res_register.data);
      setuserID(res_register.data[0].userID)
      setData(res_register.data)
      setuser(res_register.data)
      return res_register.data[0]
    }
    catch(err){
      console.error(err);
      // alert(`user ${username} not found`)
    }
    
  }

  // const handleImage = async () => {
  //   try{
  //     const url = ""
  //     // console.log(url)
  //     setuserImage(url)
  //     return url;
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // } 
//   const handleKey = (e) => {
//     handleSearch()  && search && handleImage() 
//  }
// const handleKey = (e) => {
//   e.code === "Enter" && handleSearch() &&  handleImage() 
// }

const handleKey = (e) => {
 e.code==="Enter" && handleSearch()   
}

//   if(chats){
//     console.log("working")
//     userImage=userImage && chats
//   }
//  else{
//   setChats(userImage)
//  }


 const handleChat = async () => {
try{
  // return username
var res_register = await axios.post("http://localhost:2500/Searchuser",{
  Name:username
})
setName(res_register.data[0].Name)
setuserImage(res_register.data[0].image)
setUsername(res_register.data[0].Name)
}
catch(err){
  console.error(err);
}
getMessage()
setuser(null)
setUsername("")
}

  return (
    <div className="home">
      <div className="container">
      <ChatContext.Provider value={{username,setUsername,search,setSearch,userImage,setuserImage,Name,setName,handleKey,chats,setChats,handleChat,messages,setMessages,getMessage,data,setData,user,setuser,userID,setuserID}} >
        <Sidebar/>
        <Chat/>
      </ChatContext.Provider>  
      </div>
    </div>
  )
}

export default Home
