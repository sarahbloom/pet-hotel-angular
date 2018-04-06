const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// console.log('pet router working');

router.delete('/:id', (req, res)=>{
    console.log('DELETE /pet');
    const petId = req.params.id;
    let queryText = `DELETE FROM "pet" WHERE "id"=$1;`;
    pool.query(queryText, [petId])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log('error DELETING /pet:', err);
        res.sendStatus(500);
    })
})

//get pets currently in the database
router.get('/', (req, res) => {
    console.log('GET request pet');
    let queryText = `SELECT "pet"."name" as "pet_name", 
                    "pet"."type" as "pet_type", "pet"."breed" as "pet_breed", 
                    "pet"."checked_in" as "checked_in", "pet"."id" as "id", "owner"."first_name" as "owner_name"  
                    FROM "pet" JOIN "owner" on "owner"."id" = "pet"."owner_id" ORDER BY "pet"."breed" ASC;`;
    pool.query(queryText).then(result => {
        console.log('Success in  seclecting pets - GET /pet', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('ERROR SELECTING PET - GET /pet -', error);
        res.sendStatus(500);
    })
    
})

//post new pet to database
router.post('/', (req, res)=>{
    console.log('POST received in /pet');
    const newPet = req.body;
    // console.log('req.body in POST /pet:', newPet);
    let queryText = `INSERT INTO "pet"("name", "type", "breed", "owner_id", "checked_in")
    VALUES($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newPet.name, newPet.type, newPet.breed, newPet.owner_id, newPet.checked_in])
    .then((result) =>{
        res.sendStatus(201);
    }).catch((err) => {
        console.log('ERROR posting new /pet', err);
        res.sendStatus(500);
    })
})

module.exports = router;