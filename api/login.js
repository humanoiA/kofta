var express=require('express');
var router=express.Router();
const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
var managerModule=require('./managerRouter');
const managerModel = require('./managerRouter');


//login
router.post('/loginManager',function(req,res,next){
    var email=req.body.email;
    var password=req.body.pass;
    
    var response={ statusCode:404,
    status:false,
    message:"Authentication Failed", 
    redirectTo:"/index" 
    }
    
    var name= managerModel.find({email:email})
    name.exec()
    .then(user=>{
        if(user.length<1){
          res.status(200).json(response); 
        }else{
          bcrypt.compare(password,user[0].password, function(err, result) {
                if(err){
                    res.status(200).json(response); 
                }
                if(result){
                    req.session.user=user;
                    res.status(201).json({
                        statusCode:200,
                        status:true,  
                        message:"logged successfully"
                       });
                }
            })      
        }
    })  
    .catch(err=>{
        res.status(200).json({
            error:err
        });               
    })
})    

//signup manager
router.post('/signup',function(req,res,next){
    var firstname=req.body.firstName;
    var lastname=req.body.lastName;
    var gender=req.body.gender;
    var email=req.body.email;
    var password=req.body.password;
    var confirmPassword=req.body.confirmPassword;
    console.log(firstname)
    bcrypt.hash(password, 10, function(err, hash) {
       if(err){
       res.status(200).json({
         statusCode:404,
         status:false, 
         message:err.toString(),
         error:err
       });
       }else{
          var managerDetails=new managerModel({
             firstName:firstname,
             lastName:lastname,
             email:email,
             password:hash,
             gender:gender
           });
     
           managerDetails.save()
           .then(manager=>{
                res.status(201).json({
                 statusCode:200,
                 status:true,  
                 message:"manager registered successfully"
                });
            })
           .catch(err=>{
                res.status(201).json({
                    statusCode:404,
                    status:false,  
                    message:err
                })   
            })
        }    
    })                
})
module.exports=router;