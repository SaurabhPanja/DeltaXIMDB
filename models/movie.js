const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name          : String,
  yearOfRelease : Number,
  plot          : String,
  poster        : {
      type : String,
      default : "https://ucarecdn.com/eae029f3-0a32-4ce5-9a5e-660f437cbbfa/no.png"
  },
  actors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor"
        }
    ]
});

module.exports = mongoose.model('Movie',movieSchema);
