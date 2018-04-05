const express = require('express');
const bodyParser = require('body-parser');
// const ownerRouter = require('./routes/owner.routes.js')
// const petRouter = require('./routes/pet.router.js')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('server/public'));

app.use(bodyParser.json());

// app.use('/owner', ownerRouter);
// app.use('/pet', petRouter);

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});