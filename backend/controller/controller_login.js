const db = require("../model/db")


exports.findlogin = (req,res) =>{
    db.find({"Email":req.body.Email,"Password":req.body.Password})
    .then(result=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
        console.log(err)
    })
} 
