/**
 * Itt történik meg a játék ellenőrzése, hogy nyert e?
 * Ha nem nyert akkor -10 Ft, ha nyert, akkor +18 Ft, ,utána next()
 */

module.exports = (objRep) => {
    return (req, res, next) => {

        res.locals.siker = false;
        console.log(req.body);


        if (req.body.game1 == (res.locals.forog = true)) {
            res.locals.siker = false;
        }
        else {
            res.locals.siker = true;

        }

        res.locals.forog = true;
        const a = Math.floor(Math.random() * (100));
        console.log(a);

        if (a % 2 == 0) {
            res.locals.forog = false;
        }
        
        return next();





    }

}

