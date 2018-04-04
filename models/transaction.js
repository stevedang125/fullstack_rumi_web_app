// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;


// Create an object or Schema to hold the new receipt info
var transactionSchema = new Schema({
    group_name: { type: String },
    receipt_link: { type: String },
    company_name: { type: String },
    transaction_type: { type: String },// Rent? Restaurant? and so on...
    items: [],
    prices: [],
    total: { type: String },
    friends_ids: [],
    num_friends: { type: String },
    each_pay: { type: String },
    friend_names: [],
    date: { type: String },
    user_id: { type : String }
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
