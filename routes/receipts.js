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
const Receipts = require('../models/receipt');

// These will be used to get the object id
// to fetch the contact list from the database to the template:
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;


// =========================== Receipt list ================================================

// Fetch the contact list from the database to the template
router.get('/receipts', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    const user_id = new ObjectId(req.user.id);
    const query = Receipts.find({});
    query.where('user_id', user_id);

    query.exec(function(err, receiptList){
        (err) ? console.log('Error! ** Search for tasks with same owner: '+err) : res.status(200).json({user: req.user, receiptList: receiptList});
    });

});


// Add a new receipt
router.post('/receipts/upload', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    // Create a new object to hold the new contact informaiton from the request.body
    const user_id = new ObjectId(req.user.id);
   
    let newReceipt = new Receipts({
        _id: req.body._id,
        key: req.body.pic_key,
        name: req.body.pic_name,
        link: req.body.pic_link,
        date: req.body.pic_date,
        user_id: user_id
    });

    Receipts.addReceipt(newReceipt, (err, receipt)=>{
        (err) ? res.json({success: false, msg: 'Error! Failed to add new receipt.'}) : res.json({success: true, msg: 'Receipt added!'});
    });

});

module.exports = router;
