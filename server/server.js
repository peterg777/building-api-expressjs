const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRouter = require('./routes');


let app = express();


app.use(express.static('client'));


app.use(cors());                    
app.use(express.json());   
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);



app.listen(3000, () => console.log('server running on port 3000'));
