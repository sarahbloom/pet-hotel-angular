const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// console.log('owner router working');

router.get('/', (req, res) => {
    console.log('GET request owner'); 
    let queryText = `SELECT "owner"."first_name" as "owner_name", 
                "owner"."email" as "email", 
                "owner"."id" as "owner_id",
                count("pet") as "total_pets" FROM "owner" 
                JOIN "pet" on "owner"."id" = "pet"."owner_id" 
                GROUP BY "owner"."first_name", "owner"."email", "owner"."id" ORDER BY "owner"."first_name" ASC;`;
    pool.query(queryText)
    .then((result) => {
        console.log('Success in  seclecting owners - GET /pet', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR IN GETTING OWNERS:', error);
        res.sendStatus(500);
    })
})

module.exports = router;

