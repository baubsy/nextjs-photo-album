import React from "react";
import Image from "next/image";
import { Box, Dialog } from "@mui/material";

const PhotoModal = (props) => {
    if (props.photo.data != null) {
        return (
            <Dialog open={props.open} onClose={props.onClose}>
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
            </Dialog>
        );
    }
};

export default PhotoModal;
