import React,{useContext} from "react";
import '../Pages/style.css'
import {ChatContext} from '../Context/chatContext'


function Profilepicture() {
const {image,setimage} = useContext(ChatContext)

const handleImage = (e) => {
const img_src = e.target.files[0]  
const image_url = URL.createObjectURL(img_src)
console.log("url",image_url)
setimage(image_url)
}


return ( 
<div>
<input style={{display:'none'}} type='file' id='file' placeholder='Add profile picture' onChange={handleImage}></input>
  <label htmlFor='file' className='label-class'>
    <img src={image} height={50} width={50}  alt=''></img>
    <p className='p1'> Click to add profile picture</p>
  </label>
</div>
  )
}

export default Profilepicture

// {/* <input style={{display:'none'}} type='file' id='file' placeholder='Add profile picture' onChange={(e)=>setImage(e.target.files[0])}></input> */}
//                 {/* <label htmlFor='file' className='label-class'>
//                   <img src={Add} alt=''></img>
//                   <p className='p1'> Add profile picture</p>
//                 </label> */}


