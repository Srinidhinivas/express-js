// it is a user defined midle ware

const errorhandler = (err,req,res,next) => {
    console.error(err.stack)
    console.log("error occured")
    res.status(500).send(err.message);
    next()
}

module.exports = errorhandler;