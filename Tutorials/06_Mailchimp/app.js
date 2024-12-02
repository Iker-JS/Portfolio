const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

// Root route using app.route()
app.route('/').get((req, res) => {
    
    res.send("Welcome to the GET root route!");

}).post((req, res) => {

    res.send("You made a POST request to the root route!");
});
