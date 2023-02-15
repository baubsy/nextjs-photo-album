import Head from "next/head";
import Image from 'next/image';


export function getStaticProps(){
    const dummyPhotos = {id: "1", path:"/../../photos/prize.PNG"}
    return {
        props:{
            dummyPhotos,
        },
    };
}

export function getStaticPaths() {
    const paths = [{params: {id: "1"}}];

    return {
        paths,
        fallback: false,
    };
}

export default function Photo({dummyPhotos}) {
    return (
        <div>
            <Head>
                <title>Photo Test</title>
            </Head>
            <h1>Photo Page</h1>
            <Image
                src={"/../../photos/prize.PNG"}
                alt="test"
                height={200}
                width={200}
            />
        </div>
    );
}
