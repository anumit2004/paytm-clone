const express = require('express');
const router = express.Router();
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const {User} = require('../db');
const { authTokenMiddleware } = require('../middleware');
const {Account} = require('../db');

const signupschema = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(6),
    firstname: zod.string().min(1).max(1024),
    lastname: zod.string().min(1).max(1024)
    
})

router.post("/signup",async (req,res)=>{
        const {success} = signupschema.safeParse(req.body);
        if(!success){
            return res.status(400).json({message: "Invalid signup data"});
        }
        const existingUser = await User.findOne({username:req.body.username});
        if(existingUser){
            return res.status(400).json({message: "Username already exists"});
        }

        const user  = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
            
        })
        const userId = user._id;

        //creating a account
        //------------------------------
        await Account.create({
            userId:userId,
            balance:1+Math.random()*10000
        })
        //----------------------------

        const token = jwt.sign({userId},JWT_SECRET);
        return res.status(200).json({
            message: "User created successfully",
            token
        });
})
const signinschema = zod.object({
    username: zod.string().min(3),
    password: zod.string().min(6)
})
router.post("/signin",async (req,res)=>{
    const {success} = signinschema.safeParse(req.body);
    if(!success){
        return res.status(400).json({message: "Invalid signin data"});
    }
    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    }) 

    if(!user){
        return res.status(400).json({message: "Invalid username or password"});
    }
    const userId = user._id;
    const token = jwt.sign({userId},JWT_SECRET);
    return res.status(200).json({
        message: "User signed in successfully",
        token
    });

})

const updateschema = zod.object({
    firstname: zod.string().min(1).max(1024).optional(),
    lastname: zod.string().min(1).max(1024).optional(),
    password: zod.string().min(6).optional()
})
router.put("/",authTokenMiddleware,async (req,res)=>{
    const {success}= updateschema.safeParse(req.body);
    if(!success){
        return res.status(400).json({message: "Invalid update data"});
    }

    await User.updateOne(
        {_id:req.userId},
        req.body
    );

    res.status(200).json({
        message: "User updated successfully"
    });
})


router.get("/bulk",authTokenMiddleware, async (req,res)=>{
    const filter  = req.query.filter ||"";
    const users = await User.find({
        _id:{$ne:req.userId},
        $or :[
            {firstname:{ "$regex" : filter}},
            {lastname:{"$regex": filter}},
        ]
    });

    res.status(200).json({
        user: users.map(user =>{
            return {
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                _id: user._id
            }
        })
    });
})

router.get("/bulk/me", authTokenMiddleware, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
        user: {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }
    });
});

module.exports = router;