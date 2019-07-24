const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  Name          : String,
  Sex           : String,
  DOB           : Date,
  Bio           : String,
  movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
});

module.exports = mongoose.model('Actor',actorSchema);
