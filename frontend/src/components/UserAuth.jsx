import {useState} from 'react'



const UserAuth = (initialValue) => {
  const [isAuth,setisAuth] = useState(initialValue)
  const register = () => {
    setisAuth(true)
  }
  const login = () => {
    setisAuth(true)
  }

  const logout = () => {
    setisAuth(false)
  }

  return [isAuth,login,logout,register];
}

export default UserAuth
//https://messaging-api.onrender.com
//https://messaging-api.onrender.com