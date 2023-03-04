import { imgurID } from "../secrets";
import * as FormData from 'form-data'

const ImgurUpload = () => {
  const photoHeaders = {"Authorization": `Client-ID ${imgurID}`}

  const formdata = new FormData();
  formdata.append("image", "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");

  const requestOptions = {
    method: 'POST',
    headers: photoHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://api.imgur.com/3/image", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

export default ImgurUpload;