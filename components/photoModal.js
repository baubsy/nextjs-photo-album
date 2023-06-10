import React from "react";
import { Image, Box } from "@mui/material";

const PhotoModal = (props) => {
    return (
        <Box sx={{ backGroundColor: "white" }}>
            <h2>Photo Title</h2>
            <Image
                priority
                src={props.photo.data.path}
                alt="test"
                height={200}
                width={200}
            />
            <p>Description</p>
        </Box>
    );
};

export default PhotoModal;
