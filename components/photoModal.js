import React from "react";
import Image from "next/image";
import { Box, Dialog, Typography } from "@mui/material";

const PhotoModal = (props) => {
    if (props.photo.data != null) {
        return (
            <Dialog open={props.open} onClose={props.onClose}>
                <Box sx={{ backgroundColor: "white", padding: "15px" }}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ margin: "auto" }}
                    >
                        Photo Title
                    </Typography>
                    <Box sx={{ height: "1000px", width: "1000px" }}>
                        <Image
                            priority
                            src={props.photo.data.path}
                            alt="test"
                            fill={true}
                        />
                    </Box>
                    <p>Description</p>
                </Box>
            </Dialog>
        );
    }
};

export default PhotoModal;
