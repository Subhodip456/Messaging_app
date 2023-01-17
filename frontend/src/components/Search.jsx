import React,{useContext} from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'
import {ChatContext} from '../Context/chatContext'


const Search = () => {
  const {username,setUsername} = useContext(ChatContext)
  // const {userImage} = useContext(ChatContext)
  // const {search} = useContext(ChatContext)
  // const {Name} = useContext(ChatContext)
  const {handleKey} = useContext(ChatContext)
  const {handleChat} = useContext(ChatContext)
  const {user} = useContext(ChatContext)
  const {messages} = useContext(ChatContext)
  const {Name} = useContext(ChatContext)
  // const handleSearch = async () => {
    
  //   try{
  //     // return username
  //   var res_register = await axios.post("http://localhost:2500/Searchuser",{
  //     Name:username
  //   })
  //   if(res_register.data.length!==0){
  //     setSearch(true)
  //   }
  //   else{
  //     setSearch(false)
  //   }
  //     console.log("res_register.data",res_register.data);
  //     setuserImage(res_register.data[0].url)
  //     setName(res_register.data[0].Name)
  //     return res_register
  //   }
  //   catch(err){
  //     console.error(err);
  //     // alert(`user ${username} not found`)
  //   }
    
  // }

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

  
  // useEffect(()=>{
  //   handleSearch();
    
  //  search && handleImage() ;
  // },[username])

  // useEffect(()=>{
  //   handleKey();
  // },[username])

  // const handleKey = (e) => {
  //    handleSearch() && search && handleImage() 
  // }
  
  // if(messages.map((m)=>{
  //   return m.message===null

  // }))

  const msg = messages.map((m)=>{
    // console.log("Name =",Name)
    // console.log("m.chatName",m.chatName)
    if(m.chatName === Name){
    //  console.log("works")
     return m.message
    }
    else{
    //  console.log("Not works")
     return 
    }
   })
 

  
  
  return (
    <div className='search'>
        <div className='search-form'>
            <input type='text' placeholder='Find a user ...'  value={username} onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)}/>
        </div>

        {user && user.map((m)=>(<div className='userchat' onClick={handleChat}>
            <img src={m.image} alt=''></img>
            <div className="userChatinfo">
                <span>{m.Name}</span>
                <p>{msg}</p>
            </div>
        </div>))}
    </div>
  )
}

export default Search
