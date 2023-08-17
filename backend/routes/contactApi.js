const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Contact = require('../model/contact') //contact schema importation
const nodemailer = require("nodemailer");

mongoose.connect('mongodb://127.0.0.1:27017/mzdb')

router.get('/',(req,res)=>{
	Contact.find((err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	}).sort({data:-1})
})

router.post('/',(req,res)=>{
	let formData= new Contact({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		emailId:req.body.emailId,
		phoneNo:req.body.phoneNo,
		message:req.body.message,
	})

	formData.save(err=>{
		if(!err)
			{
				sendMail(formData,info=>console.log("Message sent: %s", info.messageId));
				res.send({response:"Thanks For Message",st:1})
			}
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

router.post('/',(req,res)=>{
	let formData= new Contact({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		emailId:req.body.emailId,
		phoneNo:req.body.phoneNo,
		message:req.body.message,
	})

	formData.save(err=>{
		if(!err)
			{
				sendMail(formData,info=>console.log("Message sent: %s", info.messageId));
				res.send({response:"Thanks For Message",st:1})
			}
		else
			res.send({response:"Error in code",st:0,error:err})
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
    subject: "Thanks For Contacting Us", // Subject line
    html: `<b>Dear ${data.firstName} ${data.lastName} </b>
    <br><p>One of our team will be in contact with you shortly...</p><p> 
    We value your enquiry and we will make every effort to contact you as soon as possible.</p>
    <h3>Regards Magnews</h3>`, // html body
  });
  cb(info);

}

router.delete('',(req,res)=>{
		let id=req.params.id;
	Contact.deleteMany({},(err,data)=>{
		if(!err)
            res.send({response:"Account deleted",st:1})		
        else
			res.send({response:"Error in code",st:0,error:err});
	})
})

module.exports=router;