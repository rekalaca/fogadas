function addRoutes(app){

    const objRep = {
    }
    const penz = {}

    app.post('/game',fejesMW(objRep),renderMW(objRep));
    app.get('/', renderMW(objRep));
 }  

 const renderMW=require('../middleware/render');
 const fejesMW = require("../middleware/fejes");

 module.exports = addRoutes;