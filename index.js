const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

const sql = require('msnodesqlv8');

const connectionString = "server=SIMMER;Database=Bookstore;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const fictionQuery = "(select b.ISBN, b.Year, b.title, b.category, b.price, a.FirstName, a.LastName, b.src from Book as b inner join author as a on b.AuthorID = a.AuthorID where category LIKE '%Fiction%'and category not like '%Non-Fiction%')";
const nonFictionQuery = "select b.ISBN, b.Year, b.title, b.category, b.price, a.FirstName, a.LastName, b.src from Book as b inner join author as a on b.AuthorID = a.AuthorID where category LIKE'%Non-Fiction%'";
const bioQuery = "select b.ISBN, b.Year, b.title, b.category, b.price, a.FirstName, a.LastName, b.src from Book as b inner join author as a on b.AuthorID = a.AuthorID where category LIKE '%Biography%'";
const sciFiQuery = "select b.ISBN, b.Year, b.title, b.category, b.price, a.FirstName, a.LastName, b.src from Book as b inner join author as a on b.AuthorID = a.AuthorID where category LIKE '%Sci-Fi%'";
const kidsQuery = "select b.ISBN, b.Year, b.title, b.category, b.price, a.FirstName, a.LastName, b.src from Book as b inner join author as a on b.AuthorID = a.AuthorID where category LIKE '%Kid%'";

app.get('/fiction', (req, res) =>{
    sql.query(connectionString, fictionQuery, (err, data) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    })
})

app.get('/non-fiction', (req, res) =>{
    sql.query(connectionString, nonFictionQuery, (err, data) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    })
})

app.get('/bio', (req, res) =>{
    sql.query(connectionString, bioQuery, (err, data) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    })
})

app.get('/sci-fi', (req, res) =>{
    sql.query(connectionString, sciFiQuery, (err, data) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    })
})

app.get('/kids', (req, res) =>{
    sql.query(connectionString, kidsQuery, (err, data) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    })
})



app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})


app.use('/', router);
app.listen(3000, ()=>{
    console.log('listening at port 3000');
})