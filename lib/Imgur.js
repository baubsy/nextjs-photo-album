import { imgurID } from "../secrets";
import * as FormData from 'form-data'

const ImgurUpload = (photo, setPhotoData) => {
  let retStr;
  const photoHeaders = {"Authorization": `Client-ID ${imgurID}`}

  const formdata = new FormData();
  formdata.append("image", photo);
  formdata.append("type", "file")

  const requestOptions = {
    method: 'POST',
    headers: photoHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  
  fetch("https://api.imgur.com/3/image", requestOptions)
    .then(response => response.text())
    .then(result => {
      const res = JSON.parse(result);
      if(res.status){
        console.log(res.data)
        setPhotoData(res.data);
      }
    })
    .catch(error => console.log('error', error));
    
  
};

export default ImgurUpload;