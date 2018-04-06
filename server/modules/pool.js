// PG CONFIG SETUP
const pg = require('pg');
const Pool = pg.Pool;

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };

} else {
 
    config = {
        user: process.env.PG_USER || null, 
        password: process.env.DATABASE_SECRET || null,
        host: process.env.DATABASE_SERVER || 'localhost', 
        port: process.env.DATABASE_PORT || 5432, 
        database: process.env.DATABASE_NAME || 'petHotel',
        max: 10, 
        idleTimeoutMillis: 30000, 
    };
}

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


