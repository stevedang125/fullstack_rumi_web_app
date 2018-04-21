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
const StaticUser = require('../models/staticUser');

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

// ======== ROOMAMTES -> MOBILE FUNCTIONALITY/MODIFIED FUNCTIONALITY ========

// GET list of roomates from JWT and return array of Userinfo's
router.get('/roommates', passport.authenticate('jwt', { session : false }), (req, res, next) => {
  const user_id = new ObjectId(req.user.id);

  // console.log("Finding roommates for " + req.user.name + "...");

  User.findOne({ _id : user_id }, function(err, user) {
    if(err) {
      res.json({ success : false, msg : "Cannot fetch list of roommates." });
    }

    User.find({ _id : { $in : user.roommates }}, function(err, results) {
      if(err) {
        res.json({ success : false, msg : "Cannot fetch list of roommate data."});
      }

      res.json({ success : true, user : user, roommates : results });
    });
  });
});

// Find users with a name, email, or username containing the request's string
router.post('/roommates/find', passport.authenticate('jwt', { session : false }), (req, res, next) => {
  var roommate_name = req.body.roommate_name;
  var currUser = req.user.id;

  // console.log("Trying to find " + roommate_name + "...");

  // Find roommates who are users but not static users, and not yourself
  User.find({
    $and:[
      { $or:[
        { name : { $regex : roommate_name } },
        { email : { $regex : roommate_name } },
        { username : { $regex : roommate_name } }
      ]},
      { username : { $exists: true } },
      { _id : { $ne : currUser } }
    ]}).exec(function(err, docs){
      if(err) {
        res.json({ success : false, msg : "Cannot find any users."});
      }

      // console.log("Found roommates: " + JSON.stringify(docs));
      res.json({ success : true, users : docs });
  });

});

// Add a new roommate into the current user's roommates array
router.post('/roommates/add', passport.authenticate('jwt', { session : false }), (req, res, next) => {
  var currUser = req.user.id;
  var currRoommate = req.body._id;

  // console.log("Roommate id: " + currRoommate);
  // console.log("User id: " + currUser);

  if(currRoommate != undefined) {
    User.findOne({ _id : currUser }, function(err, doc) {
      if(err) {
        res.json({ success : false, msg : "Cannot find user." });
      }

      if(doc.roommates.indexOf(currRoommate) < 0) {
        doc.roommates.push(currRoommate);
        doc.save();
        res.json({ success : true, msg : "Added roommate!" });
      }
      else {
        res.json({ success : false, msg : "Roommate already added." });
      }
    });
  }
});

router.post('/roommates/add/static', passport.authenticate('jwt', { session : false }), (req, res, next) => {
  var currUser = new ObjectId(req.user.id);
  var staticUser = req.body.roommate;

  // Create a static roommate
  StaticUser.create(staticUser, function(err, newUser) {
    if(err) {
      res.status(401).json({ success : false, msg : "Cannot create static user."});
    }

    // Update the current user's roommates array with the static roommate's ID
    User.findByIdAndUpdate(currUser, { $push : { roommates : newUser._id } }, {safe: true, new : true}, function(err, doc) {
      if(err) {
        res.status(401).json({ success : false, msg : "Cannot add new static user."});
      }

      // console.log("Updated user:" + JSON.stringify(doc));

      res.status(200).json({ success : true, msg : "Added roommate!" });
    });
  });
});

router.delete('/roommates/delete/:id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  var deleteId = req.params.id;
  var userId = req.user.id;

  // Find the user to modify it's roommates array
  User.findOneAndUpdate({ _id : userId }, { $pullAll : { roommates : [deleteId] } }, function(err, user) {
    if(err) {
      res.status(401).json({ success : false, msg : "Cannot delete roommate." });
    }

    // Find the static user associated with the ID to delete
    StaticUser.findOne({ _id : deleteId, isRegistered : false }, function(err, deleteUser) {
      if(err) {
        res.status(401).json({ success : false, msg : "Cannot delete roommate." });
      }

      // If the roommate to delete is a static user, delete their document entirely
      // from the collection
      if(deleteUser) {
        StaticUser.remove({ _id : deleteId }, function(err, res) {
          if(err) {
            res.status(401).json({ success : false, msg : "Cannot delete roommate." });
          }
        });
      }

      // Return success if roommate has been unlinked
      res.status(200).json({ success : true, msg : "Deleted roommate!" });
    });

  });
});

module.exports = router;
