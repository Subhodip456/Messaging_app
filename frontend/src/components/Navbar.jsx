import React,{useState,useEffect} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate()
  const [Names,setNames] = useState("");
  const [img,setImg] = useState("")
  const [id,setID] = useState("")
  const getName = async () => {
    try{
      let getName_response = await axios.get("https://messaging-api.onrender.com/Register")
      setNames(getName_response.data[0].Name)
      setImg(getName_response.data[0].image)
      setID(getName_response.data[0]._id)
      // console.log("getName_response.data[0].image",getName_response.data[0].image)
      // console.log("getName_response.data[0]._id",getName_response.data[0]._id)
    }
    catch(error){
      console.log("error in fetching name",error)
    }
  }

  useEffect(()=>{
    getName()
  },[Names])


    const updateImage = async (url) => {   
      try{
        // console.log("url =",url)
        let updateImage_response = await axios.patch(`https://messaging-api.onrender.com/Register/${id}`,{
          image:url
        })
        setImg(url)
        // console.log(updateImage_response)

      }
      catch(error){
        console.log("error in fetching image",error)
      }
    }

    const handleImage = (e) => {
      const img_src = e.target.files[0]  
      const image_url = URL.createObjectURL(img_src)
      // console.log("navbar image url =",image_url)
      updateImage(image_url)
      }

    const logout = () => {
      navigate('/')
    }


  return (
    <div className='navbar'>
      <span className='logo'>CHAT APP</span>
      <div className='user'>
      <input style={{display:'none'}} type='file' id='file' onChange={handleImage}/>
      <label htmlFor='file'>
        <img src={img}  alt=''></img>
      </label>  
        <span>{Names}</span>
        <button onClick={logout} >LOGOUT</button>
      </div>
    </div>
  )
}

export default Navbar

