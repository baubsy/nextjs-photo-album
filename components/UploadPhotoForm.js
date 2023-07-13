import { FormControl, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import imgurUpload from "../lib/Imgur";

const UploadPhotoForm = () => {
    const [photoName, setPhotoName] = useState("");
    const [photo, setPhoto] = useState();
    const [photoData, setPhotoData] = useState(false);

    useEffect(() => {
        //console.log('link');
        //console.log(link);
        /*
        const formData = new FormData();
        formData.append('path', photoData.link)
        formData.append('height', photoData.height)
        formData.append('width', photoData.width)
        formData.append('user', "placeholder")
        formData.append('album', "placeholder")
        */
        const headers = { "Content-Type": "application/json" };
        const reqOptions = {
            method: "POST",
            body: JSON.stringify({
                path: photoData.link,
                height: photoData.height,
                width: photoData.width,
                deleteHash: photoData.deletehash,
                user: "placeholder",
                album: "placeholder",
            }),
            redirect: "follow",
        };
        console.log(reqOptions);
        if (photoData !== false) {
            console.log("Pre createPhoto fetch");
            fetch("http://192.168.1.76:3000/api/createPhoto", reqOptions);
        }
    }, [photoData]);
    const onClick = () => {
        //console.log(photoName);
        //console.log(photo);
        imgurUpload(photo, setPhotoData);
        //console.log(link);
    };

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
                onChange={(event) => {
                    //console.log(event);
                    setPhoto(event.target.files[0]);
                }}
            />
            <Button variant="contained" onClick={onClick}>
                Upload
            </Button>
        </FormControl>
    );
};

export default UploadPhotoForm;
