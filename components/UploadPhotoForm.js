import { FormControl, TextField, Button } from "@mui/material";
import {useState, useEffect} from 'react';
import imgurUpload from "../lib/Imgur";


const UploadPhotoForm = () => {
  const [photoName, setPhotoName] = useState("");
  const [photo, setPhoto] = useState();
  const [link,setLink] = useState("");

  useEffect(() => {
    console.log(link);
  }, [link])
  const onClick = () => {
    //console.log(photoName);
    //console.log(photo);
    imgurUpload(photo, setLink);
    console.log(link);
    
  }

  return (
    <FormControl>
      <TextField 
        id="photoName" 
        variant="standard"
        value={photoName}
        onChange={(event) => {        
          setPhotoName(event.target.value);
        }}
        />
      <input
        accept="image/*"
        type="file"
        onChange={(event)=>{
          //console.log(event);
          setPhoto(event.target.files[0]);
        }}
      />
      <Button variant="contained" onClick={onClick}>Upload</Button>
    </FormControl>
  )
};

export default UploadPhotoForm;