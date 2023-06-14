const express = require('express');
const fs = require('fs/promises');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;


const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('js'));
const PATH = require('path');


// app.get('/', (req,res) => {
//     res.sendFile(PATH.join(__dirname, '/db/db.json'));
// });

app.get('/', (req,res) =>{
    res.sendFile(PATH.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(PATH.join(__dirname, '/public/notes.html'));
})


//this is waiting for the test note to be posted let's do that
app.get('/api/db', (req, res) =>{
    res.json(db);
    console.log('this was gotten');
})

app.post('/api/db', (req,res) => {
    let newnote= {
        title: req.body.title,
        text: req.body.text
    }
    console.log(newnote);
    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) throw err;

    //         console.log('post was successful');
    let response = `${JSON.stringify(req.body)}`;
    console.log(response);
    console.log(db);
   //return req.body;
   oldNotes = `${JSON.stringify(db[0])}`;
   collNotes = response + ',' + oldNotes;
   console.log(oldNotes);
   let myArray = [collNotes];
   console.log(myArray);
    fs.writeFile('./db/db.json', "["+myArray+"]");


        // const notes = JSON.parse(data);
        // console.log(notes);
        // console.log(db);
        // notes.push(newnote);
        // fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        //     if (err) throw err
        //     res.send(notes);
        })
   // })





//})

app.listen(PORT, () =>{
    console.log(`server listening on PORT: ${PORT}`);
})