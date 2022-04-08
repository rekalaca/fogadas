const express = require('express');
const path = require('path');
const app = express();
const port = 2222;
const bodyParser = require('body-parser');
const { vagyon } = require("./modules/mysql");


const addRoutes=require('./route');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('images'));



/* app.get("/vagyon", (req, res) => {
    vagyon((err, vagyon) => {
        if (err) throw err;
        res.render("vagyon", { vagyon });
    });
}); */

app.get("vagyon", (req, res) => {
    vagyon((err, vagyon) => {
        if (err) throw err;
        res.render("vagyon", { vagyon });
    });
});



app.use(bodyParser.urlencoded({ extended: true }));

addRoutes(app); 
app.listen(port, () =>{
    console.log(`${port} porton figyelek.`);
})