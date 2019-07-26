//only for testing purpose 

const Actor = require('./models/actor');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DeltaXIMDB');

Actor.findById("5d38268b38b6970940cffbf6",(err,data)=>{
    console.log(data);
});