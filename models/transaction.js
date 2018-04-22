// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  bill_code: String,
  roommates: { type : [String] },
  store_name : { type : String },
  receipt_link : { type : String },
  bill_date : { type : String },
  bill_date_unix : { type : Date, default : Date.now },
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
