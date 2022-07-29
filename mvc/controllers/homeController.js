const data = require("../views/data");
exports.getHomeRoute = (req,res)=>{
    res.json(data)
}