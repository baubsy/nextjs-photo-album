import Head from 'next/head';

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/getPhoto")
    const photos = await res.json();
    return {
        props: {
            photos
        }
    }
}
export default function Album({photos}) {
    console.log(photos)

    return (
        <div>
            <Head>
                <title>Album Title</title>
            </Head>
            <h1>Photos</h1>
        </div>
    )
}