const express = require('express');
const app = express();
const port = 2222;
const bodyParser = require('body-parser');
const dbData = require('./middleware/queries');


const addRoutes=require('./route');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('images'));

app.get('/penz', (req, res) => {
    dbData.penz((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})






app.use(bodyParser.urlencoded({ extended: true }));

addRoutes(app); 
app.listen(port, () =>{
    console.log(`${port} porton figyelek.`);
})