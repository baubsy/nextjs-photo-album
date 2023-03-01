import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Album() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);

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
            {photos.map((photo) => {
                return (
                    <Image
                        priority
                        src={photo.data.path}
                        alt="test"
                        height={200}
                        width={200}
                    />
                );
            })}
        </div>
    );
}
