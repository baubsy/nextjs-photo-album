const {Ref} = require('faunadb');
const faunadb = require("faunadb");

import faunaKey from '../../../secrets.js';
import imgurSecret from '../../../secrets.js';

const q = faunadb.query;
const secret = faunaKey;

const client = new faunadb.Client({
    secret,
    domain: "db.fauna.com"
});

module.exports = async (req, res) => {
    const photo = req.body.data;
    const dummyPhoto = {id: "2", path:"/photos/prize.PNG"};
    try {
        const dbs = await client.query(
            q.Create(q.Collection("photos"), {
                data: {
                    id: dummyPhoto.id,
                    path: dummyPhoto.path

                }
            })
        )
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}