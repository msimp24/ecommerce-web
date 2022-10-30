const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
    console.log('Hello world');
})

router.get('/home', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

router.get('/fiction', function(req, res){
    res.sendFile(path.join(__dirname+'/public/fiction.html'));
})

router.get('/non-fiction', function(req, res){
    res.sendFile(path.join(__dirname+'/public/non-fiction.html'));
})

router.get('/biographies', function(req, res){
    res.sendFile(path.join(__dirname+'/public/biographies.html'));
})
router.get('/kids', function(req, res){
    res.sendFile(path.join(__dirname+'/public/kids.html'));
})


app.use('/', router);
app.listen(3000, ()=>{
    console.log('listening at port 3000');
})