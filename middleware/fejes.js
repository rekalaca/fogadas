/**
 * Itt történik meg a játék ellenőrzése, hogy nyert e?
 * Ha nem nyert akkor -10 Ft, ha nyert, akkor +18 Ft, ,utána next()
 */


const connection = require("../modules/mysql")


module.exports = (objRep) => {
    return (req, res, next) => {

        res.locals.siker = false;
        console.log(req.body);

        if (req.body.game === "on") {
            res.locals.siker = true;
           
        }

        
        return next();

    }

}