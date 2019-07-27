//only for testing purpose 

const Actor = require('./models/actor');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DeltaXIMDB');

Actor.findById("5d3ace723bf7711ed8836ed2",(err,data)=>{
    console.log(data);
});