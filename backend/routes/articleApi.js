const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const Article = require('../model/article') //contact schema importation

mongoose.connect('mongodb://127.0.0.1:27017/mzdb')


const DIR = './public/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
     cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});
var upload = multer({
  storage: storage,
  limits: {    fileSize: 1024 * 1024 * 5     },
  fileFilter: (req, file, cb) => {
if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {                                
      cb(null, true);        
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

//all users data
router.get('/',(req,res)=>{
	Article.find((err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	}).sort({date:-1})
})

router.get('/Recent',(req,res)=>{
	Article.find({status:'Publish'},(err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	}).sort({date:-1}).limit(3)
})

router.get('/Publish/:category',(req,res)=>{
	Article.find({status:'Publish',category:req.params.category},(err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})

router.get('/user/:userid',(req,res)=>{
	let userid=req.params.userid;
	Article.find({userId:userid},(err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})

router.get('/:id',(req,res)=>{
	let id=req.params.id;
	Article.findOne({_id:id},(err,data)=>{
		if(!err)
			res.send(data);
		else
			res.send({response:"Error in code",st:0,error:err});
	})
})


router.delete('/:id',(req,res)=>{
	let id=req.params.id;
	Article.deleteOne({_id:id},(err)=>{
		if(!err)
			res.send({response:"Record Deleted",st:1})
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

router.patch('/status/:id',(req,res)=>{
	let id=req.params.id;
	let formData={status:req.body.status}
	Article.updateOne({_id:id},formData,(err)=>{
		if(!err)
			res.send({response:"Status Updates",st:1})
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

router.patch('/data/:id',(req,res)=>{
	let id=req.params.id;
	let formData={
		title:req.body.title,
		content:req.body.content,
		category:req.body.category}
	
	Article.updateOne({_id:id},formData,(err)=>{
		if(!err)
			res.send({response:"Record Updates",st:1})
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

router.patch('/:id',upload.single('image'),(req,res)=>{
			let img= "http://localhost:3000/public/"+req.file.filename;
	let id=req.params.id;
	let formData={
		title:req.body.title,
		content:req.body.content,
		category:req.body.category,
		image:img,
		

	}
	Article.updateOne({_id:id},formData,(err)=>{
		if(!err)
			res.send({response:"Record Updates",st:1})
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})

//multer
router.post('/',upload.single('image'),(req,res)=>{
		let img= "http://localhost:3000/public/"+req.file.filename;
	let formData= new Article({
		title:req.body.title,
		image:img,
		content:req.body.content,
		userId:req.body.userId,
		category:req.body.category,
	})

	formData.save(err=>{
		if(!err)
			res.send({response:"Record saved",st:1})
		else
			res.send({response:"Error in code",st:0,error:err})
	})
})


router.delete('',(req,res)=>{
		let id=req.params.id;
	Article.deleteMany({},(err,data)=>{
		if(!err)
            res.send({response:"Account deleted",st:1})		
        else
			res.send({response:"Error in code",st:0,error:err});
	})
})

module.exports=router;