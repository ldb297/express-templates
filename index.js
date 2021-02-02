const express = require('express');
const app = express();
const ejs = require('ejs');

//Setting up view engine
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    const superBowlObject ={
        tom: 'Tom Brady',
        patrick: 'Patrick Mahomes'
    }
    res.render('index.ejs', superBowlObject);
});

app.get('/positions', (req,res)=>{
    const positionsArray = ['quarterback', 'running back', 'wide receiver'];
    res.render('positions.ejs', { positionsArray });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`)
});