const Messages = require("../model/message")

//create and save user
exports.saveMessage = (req,res) => {

    if(!(req.body.message && req.body.chatName)){
    res.status(404).send("Request body is empty");
    }
    else{
        var data = new Messages(req.body)
        console.log("req.body =",req.body)
        data.save()
        .then((result)=>{
            res.status(200).send(result)
            console.log("saved data in db =",result)
        })
        .catch((err)=>{
            res.status(500).send(err)
            console.log(err)
        })
    }
    }

exports.getMessage = (req,res) => {
    Messages.find({})
    .then(result=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
        console.log(err)
    })
}