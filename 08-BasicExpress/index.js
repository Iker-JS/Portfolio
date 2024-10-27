const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
    res.sendFile(__dirname + '\\index.html');
});


app.post('/calculate-bmi', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = (weight/(height**2))*10_000;


    if(isNaN(weight) || isNaN(height) || !height){
        res.send('invalid options');
    }

    console.log(weight, height)    
    res.send(bmi.toFixed(2))

});

app.listen(3000, () => {
    console.log(`Running on port 3000`);
});
