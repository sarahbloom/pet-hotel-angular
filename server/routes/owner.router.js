const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//get owners currently in DB
router.get('/', (req, res) => {
    console.log('GET request owner'); 
    let queryText = `SELECT "owner"."first_name" as "owner_name", 
                "owner"."email" as "email", 
                "owner"."id" as "owner_id",
                count("pet") as "total_pets" FROM "owner" 
                LEFT JOIN "pet" on "owner"."id" = "pet"."owner_id" 
                GROUP BY "owner"."first_name", "owner"."email", "owner"."id" ORDER BY "owner"."first_name" ASC;`;
    pool.query(queryText)
    .then((result) => {
        // console.log('Success in  seclecting owners - GET /owner', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN GETTING OWNERS:', error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res)=>{
    console.log('DELETE /owner:', req.params );
    const ownerId = req.params.id;
    let queryText = `DELETE FROM "owner" WHERE "id"=$1;`;
    pool.query(queryText, [ownerId])
    .then((result) => {
         res.sendStatus(200);
    }).catch((err) => {
        console.log('error DELETING /owner:', err);
        res.sendStatus(500);
    })
})

//add new owner to DB
router.post('/', (req, res) => {
    console.log('POST received in /owner');
    const newOwner = req.body;
    // console.log('New Owner is:', newOwner);
    let queryText = `INSERT INTO "owner"("first_name", "email") VALUES($1, $2);`;
    pool.query(queryText, [newOwner.name, newOwner.email])
    .then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('ERROR posting new /owner', err);
        res.sendStatus(500);
    })
})

module.exports = router;

