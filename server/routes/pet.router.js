const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

console.log('pet router working');


router.get('/', (req, res) => {
    console.log('GET request pet');
    let queryText = `SELECT "pet"."name" as "pet_name", 
                    "pet"."type" as "pet_type", "pet"."breed" as "pet_breed", 
                    "pet"."checked_in" as "checked_in", "owner"."first_name" as "owner_name"  
                    FROM "pet" JOIN "owner" on "owner"."id" = "pet"."owner_id";`;
    pool.query(queryText).then(result => {
        // console.log('Success in  seclecting pets - GET /pet', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR SELECTING PET - GET /pet -', error);
        res.sendStatus(500);
    })
    
})


module.exports = router;