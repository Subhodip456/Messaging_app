import React,{useContext} from 'react'
import Attach from "../img/attach.png"
import img from "../img/img.png"
import {ChatContext} from '../Context/chatContext'
// import axios from "axios"


const Input = () => {
  // const [message,setMessage] = useState('')
  // const [msg,setMsg] = useState(false)
  // const {Name} = useContext(ChatContext)
  // const handleSend = async () => {
  //   try{
  //     const req = await axios.post("http://localhost:2500/message",{
  //     message:message,
  //     chatName:Name
  //   })
  //   console.log("req",req.data)
  //   }
  //   catch(err){
  //     console.error("error occured",err)
  //   }
  //   setMsg(true)
  // }
  const {message,setMessage,handleSend} = useContext(ChatContext)
  return (
    <div className='input'>
      <input type="text" placeholder='Message...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <div className='send'>
        <img src={Attach} alt=''/>
        <input type="file" style={{display:"none"}} id="file"/>
          <label htmlFor='file'>
            <img src={img} alt=""/>
          </label>
          <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
// import { Avatar, Button as MuiButton, Typography } from "@material-ui/core";
// import { grey } from "@material-ui/core/colors";
// import {
//   CloudUpload as MuiCloudUpload,
//   Delete as MuiDelete,
// } from "@material-ui/icons";
// import { spacing } from "@material-ui/system";
// import React, { createRef, useState } from "react";
// import styled from "styled-components";

// const Button = styled(MuiButton)(spacing);
// const UploadIcon = styled(MuiCloudUpload)(spacing);
// const DeleteIcon = styled(MuiDelete)(spacing);

// const CenteredContent = styled.div`
//   text-align: center;
// `;

// const BigAvatar = styled(Avatar)`
//   width: 120px;
//   height: 120px;
//   margin: 0 auto ${(props) => props.theme.spacing(2)}px;
//   ${({ $withBorder }) =>
//     $withBorder &&
//     `border: 1px solid ${grey[500]};
//      box-shadow: 0 0 1px 0 ${grey[500]} inset, 0 0 1px 0 ${grey[500]};`}
// `;

// const AvatarUpload = () => {
//   const [image, _setImage] = useState(null);
//   const inputFileRef = createRef(null);

//   const cleanup = () => {
//     URL.revokeObjectURL(image);
//     inputFileRef.current.value = null;
//   };

//   const setImage = (newImage) => {
//     if (image) {
//       cleanup();
//     }
//     _setImage(newImage);
//   };

//   const handleOnChange = (event) => {
//     const newImage = event.target?.files?.[0];

//     if (newImage) {
//       setImage(URL.createObjectURL(newImage));
//     }
//   };

//   /**
//    *
//    * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
//    */
//   const handleClick = (event) => {
//     if (image) {
//       event.preventDefault();
//       setImage(null);
//     }
//   };

//   return (
//     <CenteredContent>
//       <BigAvatar
//         $withBorder
//         alt="Avatar"
//         src={image || "/static/img/avatars/default-profile.svg"}
//         imgProps={{
//           style: {
//             maxHeight: "100%",
//             maxWidth: "100%",
//             objectFit: "cover",
//           },
//         }}
//       />
//       <input
//         ref={inputFileRef}
//         accept="image/*"
//         hidden
//         id="avatar-image-upload"
//         type="file"
//         onChange={handleOnChange}
//       />
//       <label htmlFor="avatar-image-upload">
//         <Button
//           variant="contained"
//           color="primary"
//           component="span"
//           mb={2}
//           onClick={handleClick}
//         >
//           {image ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
//           {image ? "Limpar" : "Upload"}
//         </Button>
//       </label>
//       <Typography variant="caption" display="block" gutterBottom>
//         Para obter os melhores resultados, use uma imagem de pelo menos 128 x
//         128 pixels no formato .jpg
//       </Typography>
//     </CenteredContent>
//   );
// };

// export default AvatarUpload;