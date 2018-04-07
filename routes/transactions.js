// Bring in all the dependencies:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');

// Bring in passport and jwt to protect these routes
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Bring in the contact schema from models
const Contact = require('../models/contact');
const User = require('../models/user');
const Transaction = require('../models/transaction');

// These will be used to get the object id
// to fetch the contact list from the database to the template:
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

// =========================== transactions list ================================================
// Fetch the transactions list from the database to the template
router.get('/transactions', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    const user_id = new ObjectId(req.user.id);
    const query = Transaction.find({});
    query.where('user_id', user_id);

    query.exec(function(err, transactionList){
        (err) ? console.log('Error! ** Search for transaction with same owner: '+err) : res.status(200).json({user: req.user, transactionList: transactionList});
    });
});

router.put('/transactions/names', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    console.log('1',req.body.friend_id);
    User.findById(req.body.friend_id, (err, user) => {
        if(err){
            res.status(500).json({errmsg:'Failed to find user to send back, here is the err: '+err});
        }
        // Successful found the user
        const name = user.name
        res.status(200).json({name : name});
    });
    
});

// Add a new receipt
router.post('/transactions/add', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // Create a new object to hold the new contact informaiton from the request.body
    const user_id = new ObjectId(req.user.id);
   
    let newTransaction = new Transaction({
        _id: req.body._id,
        group_name: req.body.group_name,
        company_name: req.body.company_name,
        receipt_link: req.body.receipt_link,
        transaction_type : req.body.transaction_type,
        items: req.body.items,
        prices: req.body.prices,
        total: req.body.total,
        friends_ids: req.body.friends_ids,
        num_friends: req.body.num_friends,
        friend_names:  req.body.friend_names,
        each_pay: req.body.each_pay,
        date: req.body.date,
        user_id: user_id
    });

    Transaction.addTransaction(newTransaction, (err, transaction)=>{
        (err) ? res.json({success: false, msg: 'Error! Failed to add new transaction.'}) : res.json({success: true, msg: 'Transaction added!'});
    });

});

module.exports = router;

// These are for/from Postman:

// POST request:
// Token:
// JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWI1MzU4OWIyYWQzZDI1OTA2MTU1NDYiLCJuYW1lIjoiU3RldmUiLCJlbWFpbCI6ImRydW5raW5nQGRvbnV0cy5jb20iLCJ1c2VybmFtZSI6ImZhcnQiLCJwYXNzd29yZCI6IiQyYSQxMCQ3MllHSC5HMGYzTnZsekRKbUIyZ0llV2VpbHUublYvSnM5U3paZE9zY3lLdVR3b0wuc3VjYSIsIl9fdiI6MCwiaWF0IjoxNTIyNTI4NTEwLCJleHAiOjE1MjMxMzMzMTB9.7QIN7dFMcnbuS9H89c1Q7xW-NP_dqHXDgbnPvhsC8Y4
// {
//     "group_name": "Big Foot Pony",
//     "receipt_link": "https://firebasestorage.googleapis.com/v0/b/rumi-web-app-dc4af.appspot.com/o/uploads%2Fqxxpqe1522612910958?alt=media&token=38e0f1d6-e361-4a42-9dd4-0414799ff2e4",
//     "company_name": "Knights Circle",
//     "transaction_type": "Rent",
//     "items": [ "house" ],
//     "prices":["968.34"],
//     "total": "968.34",
//     "friends_ids":["5abbea15257ae80bffed89eb", "5ab558dedbb9e4694c0ac765"],
//     "num_friends": "2",
//     "friend_names": ["Dita Dewindita", "Alana"],
//     "each_pay": "322.78",
//     "date": "Tue Apr 03 2018",
//     "user_id": "5ab53589b2ad3d2590615546"
// }

// {
//     "group_name": "Pink Pony",
//     "receipt_link": "https://firebasestorage.googleapis.com/v0/b/rumi-web-app-dc4af.appspot.com/o/uploads%2Fqxxpqe1522612910958?alt=media&token=38e0f1d6-e361-4a42-9dd4-0414799ff2e4",
//     "company_name": "Publix",
//     "transaction_type": "Grocery",
//     "items": [ "Eggs", "Banana", "Milk" ],
//     "prices":["23.9", "89.9", "968.34"],
//     "total": "1293.98",
//     "friends_ids":["5abbea15257ae80bffed89eb", "5ab558dedbb9e4694c0ac765"],
//     "num_friends": "2",
//     "friend_names": ["Dita Dewindita", "Alana"],
//     "each_pay": "431.32",
//     "date": "Tue Apr 03 2018",
//     "user_id": "5ab53589b2ad3d2590615546"
// }

// {
//     "group_name": "No Name",
//     "receipt_link": "https://firebasestorage.googleapis.com/v0/b/rumi-web-app-dc4af.appspot.com/o/uploads%2Fqxxpqe1522612910958?alt=media&token=38e0f1d6-e361-4a42-9dd4-0414799ff2e4",
//     "company_name": "Walgreen",
//     "transaction_type": "Drugs",
//     "items": [ "Pills", "Monster", "Red Bull" ],
//     "prices":["23.9", "89.9", "968.34"],
//     "total": "1293.98",
//     "friends_ids":["5abbea15257ae80bffed89eb", "5ab558dedbb9e4694c0ac765"],
//     "num_friends": "2",
//     "friend_names": ["Dita Dewindita", "Alana"],
//     "each_pay": "431.32",
//     "date": "Tue Apr 03 2018",
//     "user_id": "5ab53589b2ad3d2590615546"
// }


// // Result for GET request:
// {"user":
// {
//     "_id":"5ab53589b2ad3d2590615546",
//     "name":"Steve",
//     "email":"drunking@donuts.com",
//     "username":"fart",
//     "password":"$2a$10$72YGH.G0f3NvlzDJmB2gIeWeilu.nV/Js9SzZdOscyKuTwoL.suca",
//     "__v":0
// },
// "transactionList":
// [
//     {
//         "items":["house"],"prices":["968.34"],
//         "friends_ids":["5abbea15257ae80bffed89eb","5ab558dedbb9e4694c0ac765"],
//         "_id":"5ac2b64a4b388b09e81f44bb",
//         "group_name":"Big Foot Pony",
//         "company_name":"Knights Circle",
//         "receipt_link":"https://firebasestorage.googleapis.com/v0/b/rumi-web-app-dc4af.appspot.com/o/uploads%2Fqxxpqe1522612910958?alt=media&token=38e0f1d6-e361-4a42-9dd4-0414799ff2e4",
//         "transaction_type":"Rent",
//         "total":"968.34",
//         "num_friends":"2",
//         "each_pay":"322.78",
//         "user_id":"5ab53589b2ad3d2590615546",
//         "__v":0
//     },
//     {
//         "items":["Eggs","Banana","Milk"],
//         "prices":["23.9","89.9","968.34"],
//         "friends_ids":["5abbea15257ae80bffed89eb","5ab558dedbb9e4694c0ac765"],
//         "_id":"5ac2b6584b388b09e81f44bc",
//         "group_name":"Pink Pony",
//         "company_name":"Publix",
//         "receipt_link":"https://firebasestorage.googleapis.com/v0/b/rumi-web-app-dc4af.appspot.com/o/uploads%2Fqxxpqe1522612910958?alt=media&token=38e0f1d6-e361-4a42-9dd4-0414799ff2e4",
//         "transaction_type":"Grocery",
//         "total":"1293.98",
//         "num_friends":"2",
//         "each_pay":"431.32",
//         "user_id":"5ab53589b2ad3d2590615546",
//         "__v":0
//     }
// ]
// }