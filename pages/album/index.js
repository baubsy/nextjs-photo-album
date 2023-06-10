import React from "react";
import Head from "next/head";
import Image from "next/image";
import {PhotoModal} from "../../components/photoModal.js";
import { useEffect, useState } from "react";
import { ImageList, ImageListItem, Modal } from "@mui/material";

export default function Album() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:3000/api/getPhoto")
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setPhotos(data);
                setLoading(false);
                //console.log(photos);
            });
    }, []);

    if (isLoading) return <h1>loading</h1>;

    if (!photos) return <p>No photos</p>;

    console.log(photos);
    return (
        <div>
            <Head>
                <title>Album Title</title>
            </Head>
            <h1>Photos</h1>
            <ImageList sx={{ width: 500, height: 450 }} col={3} rowHeight={164}>
                {photos.map((photo) => {
                    return (
                        <React.Fragment>
                            <ImageListItem key={photo.data.path}>
                                <Image
                                    onClick={handleOpen}
                                    priority
                                    src={photo.data.path}
                                    alt="test"
                                    height={200}
                                    width={200}
                                />
                            </ImageListItem>
                            <Modal open={modalOpen} onClose={handleClose}>
                            <PhotoModal photo={photo} />
                            </Modal>
                        </React.Fragment>
                    );
                })}
            </ImageList>
        </div>
    );
}
