// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;


// Create an object or Schema to hold the new receipt info
// var transactionSchema = new Schema({
//     group_name: { type: String },
//     receipt_link: { type: String },
//     company_name: { type: String },
//     transaction_type: { type: String },// Rent? Restaurant? and so on...
//     items: [],
//     prices: [],
//     total: { type: String },
//     friends_ids: [],
//     num_friends: { type: String },
//     each_pay: { type: String },
//     friend_names: [],
//     date: { type: String },
//     date_unix: { type: Date, default: Date.now },
//     user_id: { type : String }
// });



var transactionSchema = new Schema({
    bill_code: { type : String },
    roommates: [],
    store_name : { type : String },
    receipt_link : { type : String },
    transaction_type : { type : String },
    bill_date : { type : Date }, // Format if *only* bill_date is used so sorting works: YYYYMMDD
    bill_date_unix : { type : Date , default : Date.now }, // Only use bill_date_unix if bill_date format is of Wed, Apr 23 type
    owner_id : { type : String },
    transaction_list : []
  });


const Transaction = module.exports = mongoose.model('Transaction', transactionSchema, 'transactions');

// ================= Helper functions =========================

// Add a new reciept to the database
module.exports.addTransaction = function(newTransaction, callback){
    newTransaction.save(callback);
}

// // Update an existing contact in the database
// module.exports.getContactById = function(id, callback){
//     Contact.findById(id, callback);
// }
