const express = require('express');
const {config} = require('../config');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.use(require('./categoria'));

app.listen(config.categorias.port,function(){
    console.log(`ms categorias : http://localhost:${config.categorias.port}`);
})