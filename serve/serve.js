require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();


const bodyParser = require('body-parser');



// parse application /x-www-form-unlencoded
app.use(bodyParser.urlencoded({ extended: false}));



// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));


mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(result => console.log('Base de datos ONLINE'))
    .catch(err => console.log(err));

 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando Puerto: ', process.env.PORT);
});