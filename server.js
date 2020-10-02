const { kMaxLength } = require('buffer');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
app.use('/', express.static('public'));

let rawData =  fs.readFileSync('myBudget.json');
let budget = JSON.parse(rawData);

// const budget = {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 25
//     },
//     {
//         title: 'Rent',
//         budget: 375
//     },
//     {
//         title: 'Grocery',
//         budget: 110
//     },
//     ]
// };

app.get('/hello', (req,res) => {
    res.send('Hello World');
});

app.get('/budget', (req,res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening att http://localhost:${port}');
});