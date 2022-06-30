module.exports = reqfilter = (req, res, next)=>{
    if(!req.query.age)
    {
        res.send("plx provide age");
    }
    else if(req.query.age<18)
    {
        res.send("under age")// http://localhost:5000/user/?age=12
    }
    else
    next();
}