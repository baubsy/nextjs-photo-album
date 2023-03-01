import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Album() {
    const [photos, setPhotos] = useState({});
    const fetchPhotos = async () => {
        const res = await fetch("http://localhost:3000/api/getPhoto");
        const data = await res.json();
        console.log(data);
        return data;
    }
    useEffect((() => {
      setPhotos(fetchPhotos());
    }),[])
    console.log(photos);
    return (
        <div>
            <Head>
                <title>Album Title</title>
            </Head>
            <h1>Photos</h1>
        </div>
    )
}