const express = require("express");
const { authTokenMiddleware } = require("../middleware");
const router = express.Router();
const {Account}= require('../db');
const { Transaction } = require('../db'); 
const mongoose = require("mongoose");
router.get("/balance",authTokenMiddleware, async (req ,res)=>{
    const account = await Account.findOne({
        userId:req.userId
    })
    res.status(200).json({
        balance : account.balance
    })
})


//perform transcation by moongoose session
router.post("/transfer",authTokenMiddleware, async (req,res)=>{


const session = await mongoose.startSession();

session.startTransaction();

const {to,amount}= req.body;

//fetch sender account
const senderaccount = await  Account.findOne({
    userId:req.userId
}).session(session);

if(!senderaccount || senderaccount.balance<amount){
    await session.abortTransaction();
    return res.status(400).json({
        message:"Insufficient balance"
    })
};
//fetch send to account
const toaccount =await Account.findOne({
    userId:to
}).session(session);

if(!toaccount){
    await session.abortTransaction();
    return res.status(400).json({
        message:"Invalid Account"
    })
}
//perform the transfer
    await Account.updateOne({userId:req.userId},
        {
            $inc:{balance:-amount}
        }
    ).session(session);

    await Account.updateOne({userId:to},{
        $inc:{balance:+amount}
    }).session(session);

    await Transaction.create({
        from:req.userId,
        to:to,
        amount:amount,
        type:"debit"
    });

    await Transaction.create({
        from:req.userId,
        to:to,
        amount:amount,
        type:"credit"
    });

    await session.commitTransaction();
    session.endSession();
    return res.status(200).json({
        message:"Transfer successful"
    });

})

router.post("/addmoney",authTokenMiddleware, async (req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount} = req.body;
    if (!amount || isNaN(amount) || amount <= 0) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: "Invalid amount" });
    }

    const account = await Account.findOne({
        userId:req.userId,
    })

    if(!account){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Account not found"
        })
    }
    await Account.updateOne({userId:req.userId},{
        $inc:{balance:+amount}
    }).session(session);

    await Transaction.create({
        from:req.userId,
        to:req.userId,
        amount:amount,
        type:"credit"
    });

    await session.commitTransaction();
    session.endSession();
    return res.status(200).json({
        message:"Money added successfully"
    });
})

router.get("/transactions", authTokenMiddleware, async (req, res) => {
    const transactions = await Transaction.find({
        $or: [
            { from: req.userId },
            { to: req.userId }
        ]
    }).populate("from","username firstname lastname").populate("to","username firstname lastname");

    res.status(200).json({transactions});
});

module.exports = router;
