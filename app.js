//DelatX IMDB
//Saurabh Panja

//app dependencies
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      Actor      = require('./models/actor');
      Movie      = require('./models/movie');

//app init
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//mongodb connectoin
mongoose.connect('mongodb://localhost/DeltaXIMDB', { useNewUrlParser: true });

//index
app.get('/',(req,res)=>{
  res.redirect('/movies');
});

//index
app.get('/movies',(req,res)=>{
  Movie.find({},(err,data)=>{
    if(err){
      console.log(err);
    }else {
      console.log(data);
      res.render('index',{movieData:data});
    }
  });
});
//create
app.get('/movies/new',(req,res)=>{
  res.render('movies');
});

app.post('/movies/new',(req,res)=>{
  res.send(req.body);
});
//read
//update
//delete

app.get('*',(req,res)=>{
  res.send('Error 404');
})

app.listen('8080',()=>{
  console.log("Port number 8080 check karna baba*");
});
