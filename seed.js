const mongoose = require('mongoose'),
      Movie    = require('./models/movie'),
      Actor    = require('./models/actor');

mongoose.connect('mongodb://localhost/DeltaXIMDB',{ useNewUrlParser: true});


const movieData = [
  {
      name          : "Super 30",
      yearOfRelease : 2019,
      plot          : "Based on life of Patna-based mathematician Anand Kumar who runs the famed Super 30 program for IIT aspirants in Patna.",
      poster        : "https://m.media-amazon.com/images/M/MV5BYWUzMGI0OTctMTljOC00N2EzLWIzYTEtMjI1NjBmMTk5ZmY0XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_UX140_CR0,0,140,209_AL_.jpg",
    },
    {
      name          : "The Avengers Endgame",
      yearOfRelease : 2003,
      plot          : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      poster        : "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    },
    {
      name          : "Bahubali : The begining",
      yearOfRelease : 2015,
      plot          : "Baahubali: The Beginning is a 2015 Indian epic action film directed by S. S. Rajamouli. The film was produced by Shobu Yarlagadda and Prasad Devineni and was shot in both Telugu and Tamil. This film was also dubbed into Malayalam and Hindi.",
      poster        : "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    }
  ];

const actorsData = [
  {
    Name          : "Akshay Kumar",
    Sex           : "Male",
    DOB           : '1977-10-06',
    Bio           : "DescriptionRajiv Hari Om Bhatia, known professionally as Akshay Kumar, is an Indian-born Canadian actor, producer, television personality, martial artist, stuntman and philanthropist who works in Bollywood films."
  },
  {
    Name          : "Robert Downey Junior",
    Sex           : "Male",
    DOB           : "1986-03-14",
    Bio           : "Robert John Downey Jr. is an American actor. His career has been characterized by critical and popular notoriety in his youth, followed by a period of substance abuse and legal troubles, before a resumption of critical repute and resurgence of commercial success in middle age."
  },
  {
    Name          : "Katrina kaif",
    Sex           : "Female",
    DOB           : "1983-05-12",
    Bio           : "Katrina Kaif is an English actress who works in Hindi films. Despite receiving mixed reviews from critics for her acting prowess, she has established herself in Bollywood and is one of India's highest-paid actresses. Born in Hong Kong, Kaif and her family lived in several countries before she moved to London."
  },
  {
    Name          : "Prabhas",
    Sex           : "Male",
    DOB           : "1980-05-23",
    Bio           : "Prabhas is an Indian film actor associated with Telugu Cinema. Prabhas made his film debut with the 2002 drama film Eeswar. He has won the Nandi Award for Best Actor, for his role in Mirchi. He appeared in a Bollywood item song, in Prabhudeva's 2014 film Action Jackson."
  },
  {
    Name          : "Tammanah Bhatia",
    Sex           : "Female",
    DOB           : "1988-04-13",
    Bio           : "Tamanna Bhatia, known professionally as Tamannaah, is an Indian actress who predominantly appears in Tamil and Telugu films. She has also appeared in several Hindi films. In addition to acting, she also participates in stage shows and is a prominent celebrity endorser for brands and products."
  },
  {
    Name          : "Scarlett Johansson",
    Sex           : "Female",
    DOB           : "1985-08-12",
    Bio           : "Scarlett Ingrid Johansson is an American actress and singer. She is the world's highest-paid actress, has a star on the Hollywood Walk of Fame, has made multiple appearances in the Forbes Celebrity 100, and is the recipient of several awards, including a Tony Award and a British Academy Film Award"
  },
  {
    Name          : "Shahrukh Khan",
    Sex           : "Male",
    DOB           : "1967-09-22",
    Bio           : "Shah Rukh Khan is an Indian actor, film producer, and television personality. Referred to in the media as the \"Badshah of Bollywood\", \"King of Bollywood\" and \"King Khan\", he has appeared in more than 80 Bollywood films, and earned numerous accolades, including 14 Filmfare Awards."
  },
  {
    Name          : "Alia Bhatt",
    Sex           : "Female",
    DOB           : "1993-03-13",
    Bio           : "Alia Bhatt is an actress and singer of Indian origin and British citizenship, who works in Hindi films. The recipient of several accolades, including three Filmfare Awards, Bhatt is one of the highest-paid actresses in India."
  }
];

Movie.deleteMany({},(err,data)=>{
  if(err){
    console.log(err);
  }
}).then(movieData.forEach((data)=>{
  Movie.create(data,(err,data)=>{
    if(err){
      console.log(err);
    }else {
      console.log(data);
    }
  });
})).then(Actor.deleteMany({},(err,data)=>{
  if(err){
    console.log(err);
  }
})).then(actorsData.forEach((data)=>{
  Actor.create(data,(err,data)=>{
    if(err){
      console.log(err);
    }else {
      console.log(data);
    }
  });
}));
