// PG CONFIG SETUP
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'petHotel', // the name of the database
    host: 'localhost', // 
    port: 5432, // the port number 
    max: 10, // connections at one time
    idleTimeoutMillis: 30000 // 30 seconds to try to connect
};

// create a new pool instance to manage connections
const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('Postgesql connected');
})

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;


