const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes.js');

const app = express();

app.use(bodyParser.json());

app.get('/', (res) => {
    res.send('Backend Server')
});

app.use('/', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(process.env.PORT, () => {
    res.send('Server Listening!')
})