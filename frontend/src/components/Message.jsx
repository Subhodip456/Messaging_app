import React,{useContext,useRef,useEffect} from 'react'
import {ChatContext} from '../Context/chatContext'


const Message = ({messages}) => {
  const {userImage} = useContext(ChatContext)
  // const {Name} = useContext(ChatContext)
  // console.log("messages",messages)
  const ref = useRef();


  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
    

  return (
    <div className='message'>
      <div className='messageinfo'>
        <img src={userImage} alt=''/>
        <span>just now</span>
      </div>
      <div className='messagecontent'>
        <p>{messages.message}</p>
      </div>
    </div>
  )
}

export default Message
