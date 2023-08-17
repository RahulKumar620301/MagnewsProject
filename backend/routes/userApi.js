const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../model/user') //contact schema importation
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");

mongoose.connect('mongodb://127.0.0.1:27017/mzdb')

//registeration
router.post('/',async(req,res)=>{
    let userdata=await User.findOne({emailId:req.body.emailId})
    if(userdata)
    	return res.send({response:"Account already exist",st:0});
    let pwd=await bcrypt.hash(req.body.password,10)
	let formData= new User({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		emailId:req.body.emailId,
		phoneNo:req.body.phoneNo,
		password:pwd,

	})

	formData.save(err=>{
		if(!err){
			sendMail(formData,info=>console.log("Message sent: %s", info.messageId));
			res.send({response:"Account Created",st:1})
		}
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

// const match = await bcrypt.compare(password,user.passwordHash);

//login
router.post('/login',async (req,res)=>{
let userdata=await User.findOne({emailId:req.body.emailId});
if(!userdata)
return res.send({response:"Incorrect emailId",st:0});
const match = await bcrypt.compare(req.body.password, userdata.password);
if(!match)
return res.send({response:"Incorrect Password",st:0});
res.send({response:"Welcome User",st:1,userId:userdata._id});
});


//view particular user
router.get('/:id',(req,res)=>{
	let id=req.params.id;
	
	User.findOne({_id:id},(err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})

//all user
router.get('/',(req,res)=>{
	User.find((err,data)=>{
		if(!err)
			{
				res.send(data);
			}
		else
			res.send({response:"Error in code",st:0,error:err});
	}).sort({date:-1})
})


//edit profile
router.patch('/:id',(req,res)=>{
	let id=req.params.id;
	const formData={
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		phoneNo:req.body.phoneNo,
		city:req.body.city,
		dob:req.body.dob,
		gender:req.body.gender

	}
	User.updateOne({_id:id},formData,(err)=>{
		if(!err)
			res.send({response:"Account updated",st:1})
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})

//forget password
router.post('/forget',async(req,res)=>{  	
	const formData={emailId:req.body.emailId, code:req.body.code}
	let userdata=await User.findOne({emailId:req.body.emailId})
	if(!userdata)
			return res.send({response:"Account not exist",st:0})
			sendMailPwd(formData,info=>{
				console.log("Message sent: %s", info.messageId)
				res.send({response:"Mail sent",st:1})

			});


	})

//change password
router.patch('/pwd/:id',async (req,res)=>{
	let id=req.params.id;
	let pwd=await bcrypt.hash(req.body.password,10)
	User.updateOne({_id:id},{password:pwd},(err)=>{
		if(!err)
			res.send({response:"Password Updated",st:1})
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})




//reset password
router.patch('/resetpwd/:emailId',async (req,res)=>{
	let emailId=req.params.emailId;
	let pwd=await bcrypt.hash(req.body.password,10)
	User.updateOne({emailId:emailId},{password:pwd},(err)=>{
		if(!err)
			res.send({response:"Password Reset Succefully , Login With a New Password ",st:1})
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})

async function sendMail(data,cb) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'pentagonalt91@gmail.com', // generated ethereal user
      pass: 'wfkrnnxlvtsvrmxl', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Magnews" <pentagonalt91@gmail.com>', // sender address
    to: data.emailId, // list of receivers
    subject: "Welcome to Magnews", // Subject line
    html: `<b>Dear ${data.firstName} ${data.lastName} </b>
    <br><p>Your Account has been created succefully</p>
    <p>Enojoy your news and texts</p>
    <h3>Regards Magnews</h3>`, // html body
  });
  cb(info);

}

async function sendMailPwd(data,cb) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'pentagonalt91@gmail.com', // generated ethereal user
      pass: 'wfkrnnxlvtsvrmxl', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Magnews" <pentagonalt91@gmail.com>', // sender address
    to: data.emailId, // list of receivers
    subject: "Password Recovery", // Subject line
    html: `<h2>Hi</h2>
<p>you just requested a password reset for the account associated with this email address.To reset your password use the code given below. If this is a mistake just ignore this email -  your password will not be changed.</p>
<h3>your verification code is ${data.code}.</h3><br>
<h5>Regards Magnews</h5>`
  });
  cb(info);

}


router.delete('',(req,res)=>{
		let id=req.params.id;
	User.deleteMany({},(err,data)=>{
		if(!err)
            res.send({response:"Account deleted",st:1})		
        else
			res.send({response:"Error in code",st:0,error:err});
	})
})

module.exports=router;