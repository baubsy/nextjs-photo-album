import React from "react";
import Image from "next/image";
import { Box, Dialog, Typography } from "@mui/material";

const PhotoModal = (props) => {
    if (props.photo.data != null) {
        return (
            <Dialog open={props.open} onClose={props.onClose}>
                <Box sx={{ backgroundColor: "white" }}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ margin: "auto" }}
                        textAlign={"center"}
                    >
                        Photo Title
                    </Typography>
                    <Box>
                        <Image
                            style={{ width: "100%", height: "auto", padding: "25px" }}
                            priority
                            src={props.photo.data.path}
                            alt="test"
                            sizes="100vw"
                            height={0}
                            width={0}
                        />
                    </Box>
                    <p>Description</p>
                </Box>
            </Dialog>
        );
    }
};

export default PhotoModal;
