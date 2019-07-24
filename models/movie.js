const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name          : String,
  yearOfRelease : Number,
  plot          : String,
  poster        : String,
  actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor"
        }
    ]
});

module.exports = mongoose.model('Movie',movieSchema);
