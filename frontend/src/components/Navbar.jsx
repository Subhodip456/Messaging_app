import React,{useEffect,useState} from 'react'
import axios from "axios"


const Navbar = () => {
  // const {Names} = useContext(ChatContext)
  const [Names,setNames] = useState("");
  const getName = async () => {
    try{
      let getName_response = await axios.get("https://messaging-api.onrender.com/Register")
      setNames(getName_response.data.Name)
      console.log("getName_response",getName_response.data)
    }
    catch(error){
      console.log("error in fetching name",error)
    }
  }
  useEffect(()=>{
    getName()
  },[Names])

  return (
    <div className='navbar'>
      <span className='logo'>CHAT APP</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''></img>
        <span>{Names}</span>
        <button>LOGOUT</button>
      </div>
    </div>
  )
}

export default Navbar

//'https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'