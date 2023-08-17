const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Admin = require('../model/admin') //contact schema importation
mongoose.connect('mongodb://127.0.0.1:27017/mzdb')
const bcrypt = require('bcrypt')


//registeration
router.post('/',async(req,res)=>{
    let admindata=await Admin.findOne({username:req.body.username})
    if(admindata)
    	return res.send({response:"Account already exist",st:0});
    let pwd=await bcrypt.hash(req.body.password,10)
	let formData= new Admin({

		username:req.body.username,
		password:pwd,

	})

	formData.save(err=>{
		if(!err){
			res.send({response:"Account Created",st:1})
		}
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})


//login
router.post('/login',async (req,res)=>{
let admindata=await Admin.findOne({username:req.body.username});
if(!admindata)
return res.send({response:"Incorrect username",st:0});
const match = await bcrypt.compare(req.body.password, admindata.password);
if(!match)
return res.send({response:"Incorrect Password",st:0});
res.send({response:"Welcome Admin",st:1,adminId:admindata._id});
});


router.delete('',(req,res)=>{
		let id=req.params.id;
	Admin.deleteMany({},(err,data)=>{
		if(!err)
            res.send({response:"Account deleted",st:1})		
        else
			res.send({response:"Error in code",st:0,error:err});
	})
})
module.exports=router;