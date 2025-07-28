
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config');

mongoose.connect(MONGODB_URL)

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        min:3,
        max:30,
        trim: true
    },
    password:{
        type:String,
        required: true,
        min:6,
    },
    firstname:{
        type:String,
        required: true,
        min:1,
        max:1024,
        trim: true
    },
    lastname:{
        type:String,
        required: true,
        min:1,
        max:1024,
        trim: true
    }
})

const User = mongoose.model('User', UserSchema,);

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type:Number,
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema, 'user_account'); 

const transactionSchema = new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["credit","debit"],
        required:true       
    },
    timestamp:{
        type:Date,
        default: Date.now

    }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports={
    User,
    Account,
    Transaction
};
