const {Ref} = require('faunadb');
const faunadb = require("faunadb");

import {faunaKey} from '../../../secrets.js'

const q = faunadb.query;
const secret = faunaKey;

const client = new faunadb.Client({
    secret: faunaKey,
    domain: "db.fauna.com"
});

module.exports = async(req, res) => {
    try {
        const dbs = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection("photos"))),
                q.Lambda("doc", q.Get(q.Var("doc")))
            )
        );
        res.status(200).json(dbs.data);
    } catch(error) {
        res.status(500).json({error: error.message})
    }

    


}