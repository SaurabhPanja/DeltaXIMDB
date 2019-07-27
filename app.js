//DelatX IMDB
//Saurabh Panja

//app dependencies
const express           = require('express'),
      app               = express(),
      bodyParser        = require('body-parser'),
      mongoose          = require('mongoose'),
      methodOverride    = require('method-override'),
      expressSanitizer = require('express-sanitizer'),
      Actor             = require('./models/actor'),
      Movie             = require('./models/movie');

//app init
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//mongodb connectoin
mongoose.connect('mongodb://localhost/DeltaXIMDB', { useNewUrlParser: true });

//index
app.get('/',(req,res)=>{
  res.redirect('/movies');
});

//index
app.get('/movies',(req,res)=>{
  Movie.find({}).populate('actors').exec((err,data)=>{
    if(err){
      console.log(err);
    }else {
      // console.log(data);
      res.render('index',{movieData:data});
    }
  });
});
//create
app.get('/movies/new',(req,res)=>{
  Actor.find({},(err,data)=>{
    if(err){
      console.log(err);
    }else{
      res.render('movies',{actorData:data});
    }
  })
});

app.post('/movies/new',(req,res)=>{
  Movie.create({
    name          : req.body.movieName,
    yearOfRelease : req.body.yearOfRelease,
    plot          : req.body.plot,
    poster        : req.body.poster,
    actors        : req.body.cast
  },(err,movieData)=>{
    if(err){
      console.log(err);
    }else{
      // console.log(movieData);
      //find cast by the id and push movie into it.
      const cast = req.body.cast;
      cast.forEach(element => {
        Actor.findById(element,(err,actorData)=>{
          if(err){
            console.log(err);
          }else{
            actorData.movies.push(movieData);
            actorData.save();
          }
        });
      });
    }
  });

  res.redirect('/');
  // res.send(req.body);
});
//read
//update

app.get('/movies/:id/edit',(req,res)=>{
  // res.send('edit page');
  Movie.findById(req.params.id).populate('actors').exec((err,movieData)=>{
    if(err){
      console.log(err);
    }else{
      // res.send(movieData);
      Actor.find({},(err,actorData)=>{
        if(err){
          console.log(err);
        }else{
          res.render('moviesEdit',{movieData:movieData,actorData:actorData});
        }
      });
    }
  });
});

app.put('/movies/:id',(req,res)=>{
  Movie.findByIdAndUpdate(req.params.id,{
    name : req.body.movieName,
    yearOfRelease : req.body.yearOfRelease,
    plot : req.body.plot,
    poster : req.body.poster,
    actors : req.body.cast
  },(err,data)=>{
    if(err){
      console.log(err);
    }else{
      // console.log("Movies the actor acted in "+data.actors);
      data.actors.forEach(id=>{
        Actor.findById(id,(err,actorData)=>{
          if(err){
            console.log(err);
          }else{
            console.log(actorData);
          }
        });
      });
    }
  });
  // res.redirect('/movies');
  res.send(req.body);
});

//delete
app.delete("/movies/:id",(req,res)=>{
  Movie.findByIdAndDelete(req.params.id,(err)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});
//actors

//index
app.get('/actors',(req,res)=>{
  Actor.find({}).populate('movies').exec(function(err,data){
    if(err){
      console.log(err);
    }else{
      res.send({actorData:data});
    }
  })
});
//create a new actor
app.get('/actors/new',(req,res)=>{
  // res.send('I am actor new')
  res.render('actorNew')
});

app.post('/actors/new',(req,res)=>{
  Actor.create({
    Name:req.body.name,
    Sex : req.body.sex,
    DOB : req.body.dob,
    Bio : req.body.bio
  },(err,data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }
  });
  // res.redirect('/actors');
  res.send("Actor Succesfully added");
});
//edit actor

//delte actor


app.get('*',(req,res)=>{
  res.send('Error 404');
})

app.listen('8080',()=>{
  console.log("Port number 8080 check karna baba*");
});
