// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

// Bring in passport and jwt to protect these routes
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Bring in the contact schema from models
const Contact = require('../models/contact');           // friend list  date available
const User = require('../models/user');                 // User         date NA
const Transaction = require('../models/transaction');   // tran         date available
const Receipt = require('../models/receipt');           // receipt      date available

// These will be used to get the object id
// to fetch the contact list from the database to the template:
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

// =========================== Receipt list ================================================
// Fetch the contact list from the database to the template
router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    const user_id = new ObjectId(req.user.id);

    const transactionCollection = Transaction.find({});
    const receiptCollection = Receipt.find({});
    const friendCollection = Contact.find({});


    transactionCollection.where('user_id', user_id);
    receiptCollection.where('user_id', user_id);
    friendCollection.where('user_id', user_id);

    transactionCollection.exec(function(err, tranList){
        if(err){
            console.log('Error tranList: ',err);
        }
        // console.log('=================================');
        // console.log('******** TranList example: ', tranList);

        receiptCollection.exec(tranList, function(error, receiptList){
            if(error){
                console.log('Error receiptList: ',error);
            }
            // console.log('=================================');
            // console.log('******** TranList example: ', tranList);
            // console.log('=================================');
            // console.log('******** ReceiptList example: ', receiptList);


            const array = [];
            array.push(tranList);
            array.push(receiptList);

            friendCollection.exec(array, function(error, friendList){
                if(error){
                    console.log('Error friendList: ', error);
                }
                // console.log('=================================');
                // console.log('***** Array: ',array);

                res.json({msg: 'Success!',
                user_id: user_id,
                trans: tranList,
                receipts: receiptList,
                friends: friendList
                });
            });
        });


    });

});

module.exports = router;
