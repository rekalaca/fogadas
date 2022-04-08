function addRoutes(app){
    
        const objRep = {};      
    
        
        /* app.post('/vagyon',fejesMW(objRep),renderMW(objRep));
        app.get('/vagyon',fejesMW(objRep),renderMW(objRep)); */
        app.get('/', renderMW(objRep),fejesMW(objRep));
        app.post('/',fejesMW(objRep),renderMW(objRep));
     }  
    
     const renderMW=require('../middleware/render');
     const fejesMW = require("../middleware/fejes");
    
     module.exports = addRoutes;