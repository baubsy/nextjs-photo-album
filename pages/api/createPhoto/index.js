const {Ref} = require('faunadb');
const faunadb = require("faunadb");

import {faunaKey} from '../../../secrets.js';

const q = faunadb.query;

const client = new faunadb.Client({
    secret: faunaKey,
    domain: "db.fauna.com"
});

export default async function (req, res) {
    console.log("createPhoto handler")
    console.log(req.body);
    const photoData = JSON.parse(req.body);
    //console.log(photo.path);
    const dummyPhoto = {id: "2", path:"/photos/prize.PNG"};
    const date = new Date();

    try {
        const dbs = await client.query(
            q.Create(q.Collection("photos"), {
                data: {
                    path: photoData.path,
                    album: photoData.album,
                    user: photoData.user,
                    width: photoData.width,
                    height: photoData.height,
                    date: date.toUTCString()

                }
            })
        )
        res.status(200);
    } catch (error) {
        console.log("fauna error");
        res.status(500).json({error: error.message});
    }
}