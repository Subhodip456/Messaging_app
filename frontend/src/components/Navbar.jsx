import React,{useContext} from 'react'
import {ChatContext} from '../Context/chatContext'


const Navbar = () => {
  const {Names} = useContext(ChatContext)
  return (
    <div className='navbar'>
      <span className='logo'>CHAT APP</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''></img>
        {/* <span>Subhodip</span> */}
        <button>LOGOUT</button>
      </div>
    </div>
  )
}

export default Navbar

//'https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'