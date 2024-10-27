const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '\\views');

const names = [];
const tasks = [];

app.route('/').get((req, res)=>{
    res.render('index', { names, tasks, error: null});
});


app.get('/greet', (req, res) => {

    var name = req.query.name;
    
    if (name) {
        names.push(name);

        res.render('index', { names, tasks, error: null });

    } else {
        res.render('index', { names, tasks, error: 'Please enter a name.' });
    }
});

app.get('/wazzup/:name', (req, res) => {
    var name = req.params.name;
    res.render('wazzup', { name });
});

app.post('/task', (req, res) => {
    var task = req.body.task;
    
    if (task) {
        tasks.push(task);
    }
    res.redirect('/');
});

app.post('/task/delete/:index', (req, res) => {
    var index = parseInt(req.params.index);
    
    if (!isNaN(index) && index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    res.redirect('/');
});

app.post('/task/up/:index', (req, res) => {
    var index = parseInt(req.params.index);

    if (index > 0 && index < tasks.length) {
        [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    }
    res.redirect('/');
});

app.post('/task/down/:index', (req, res) => {
    var index = parseInt(req.params.index);
    
    if (index >= 0 && index < tasks.length - 1) {
        [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    }
    res.redirect('/');
});

app.get('/task', (req, res) => {
    res.json({ tasks });
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});
