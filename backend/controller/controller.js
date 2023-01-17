const db = require("../model/db")


exports.Searchuser = (req,res) => {
    console.log(req.body.Name)
    db.find({"Name":req.body.Name})
    .then(result=>{ 
        // console.log(result)
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
    }

//create and save user
exports.createUser = (req,res) => {

if(!(req.body.Name&&req.body.Email&&req.body.Password&&req.body.image)){
res.status(404).send("Request body is empty");
}
else{
    var data = new db(req.body)
    console.log("req.body =",req.body)
    // console.log(req.body.Name,req.body.Email,req.body.Password)
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


//find the user and validate the user
exports.findreg = (req,res) => {
console.log(req.body)
db.find({"Name":req.body.Name,"Email":req.body.Email,"Password":req.body.Password})
.then(result=>{
    console.log("result",result)
    res.status(200).send(result)
})
.catch(err=>{
    res.status(500).send(err)
})
}

//get data from the DB 
exports.getlatestUser = (req,res) => {
    db.find().sort({_id:-1}).limit(1)
    .then(result=>{
        console.log("result",result)
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

//update user image url
exports.updateUser = (req,res) => {
    console.log("req.body",req.body)
    db.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then(result=>{
        console.log("result",result)
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
