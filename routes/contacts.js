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

// These will be used to get the object id
// to fetch the contact list from the database to the template:
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

// ========================== Setting/Profile =============================================
router.get('/setting', passport.authenticate('jwt', {session: false}), (req,res,next)=>{

    res.json({user: req.user});
});

// Change an existing contact password
router.put('/setting/changepassword', passport.authenticate('jwt', {session: false}), (req,res,next)=>{


    User.encryptPassword(req.body.password, (err, encyptedPassword)=>{
        if(err){
            console.log('this is an err in hash: '+err);
        }
        //console.log("new pass word is: "+encyptedPassword);
    });

    User.getUserById(req.body._id, (err, updateUser)=>{
        if(err){
            res.status(500).json({errmsg:'Failed to find user to update, here is the err: '+err});
        }
        // Successful found the user, ready to encrypt the password:
        updateUser._id = req.body._id;
        updateUser.name = req.body.name;
        updateUser.username = req.body.username;
        updateUser.email = req.body.email;

        // Get all the needed data then hash the new password and update the user
        User.encryptPassword(req.body.password, (err, encyptedPassword)=>{
            if(err){
                console.log('this is an err in hash new password : '+err);
            }

            updateUser.password = encyptedPassword;


            User.saveUserUpdate(updateUser, (err, savedUser)=>{
                if(err){
                    res.status(500).json({success: false, msg:'Failed to update password, here is the err: '+err});
                }else{
                    res.status(200).json({success: true, msg: 'User password updated!'});
                }
            });
        });


    });

});


// =========================== Friend list ================================================

// Fetch the contact list from the database to the template
router.get('/friends', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    console.log("Listing friends...");

    const user_id = new ObjectId(req.user.id);
    const query = Contact.find({});
    query.where('user_id', user_id);

    query.exec(function(err, contactlist){
        (err) ? console.log('Error! ** Search for tasks with same owner: '+err) : res.status(200).json({user: req.user, contactlist: contactlist});
    });

});

// Add a new friend
router.post('/friends/add', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    console.log("Adding new friend...");

    // Create a new object to hold the new contact informaiton from the request.body
    let newContact = new Contact({
        _id : req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        preferredName: req.body.preferredName,
        address: req.body.address,
        email: req.body.email,
        homePhone: req.body.homePhone,
        cellPhone: req.body.cellPhone,
        date: req.body.date,
        user_id: req.body.user_id
    });

    Contact.addContact(newContact, (err, contact)=>{
        (err) ? res.json({success: false, msg: 'Error! Failed to add new contact.'}) : res.json({success: true, msg: 'Friend added!'});
    });

});

// Update an existing contact
router.put('/friends/update', passport.authenticate('jwt', {session: false}), (req,res,next)=>{

    Contact.getContactById(req.body._id, (err, contact)=>{
        if(err){
            res.status(500).json({errmsg:'Failed to find contact to update, here is the err: '+err});
        }
        // Successful found the contact, ready to update it:
        contact._id = req.body._id,
        contact.firstName = req.body.firstName,
        contact.lastName = req.body.lastName,
        contact.preferredName = req.body.preferredName,
        contact.address = req.body.address,
        contact.email = req.body.email,
        contact.homePhone = req.body.homePhone,
        contact.cellPhone = req.body.cellPhone,
        contact.user_id = req.body.user_id

        Contact.addContact(contact, (err, savedContact)=>{
            if(err){
                res.status(500).json({success: false, msg:'Failed to update, here is the err: '+err});
            }else{
                res.status(200).json({success: true, msg: 'Friend Info updated!'});
            }
        });

    });

});

// Delete a contact from database
router.delete('/friends/delete/:id', passport.authenticate('jwt', {session: false}), (req,res,next)=>{
    Contact.findOneAndRemove({_id: req.params.id}, (err, contact)=>{
        if(err){
            res.status(500).json({errmsg: 'Failed to delete a friend!'});
        }
        res.status(200).json({msg: contact});
    });

});

// ======== ROOMAMTES -> MOBILE FUNCTIONALITY ========
router.get('/findUsers', passport.authenticate('jwt', { session : false }), (req, res, next) => {
  var roommate_name = req.params.roommate_name;

  console.log(roommate_name);

  User.find({
    $or:[
      { 'name' : roommate_name },
      { 'email' : roommate_name },
      { 'username' : roommate_name }
    ]}, function(err, docs){
      if(error) {
        res.json({ success : false, msg : "Cannot find any users."});
      }

      res.json({ success : true, users : docs });
  });

});

module.exports = router;
