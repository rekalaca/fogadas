

module.exports = (objRepo) =>{
    return (req, res, next) =>{
        return res.render("index", {naNyertel : res.locals.siker, naNyertel : res.locals.forog});
    }
}



