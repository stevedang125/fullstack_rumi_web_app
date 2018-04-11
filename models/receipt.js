// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;


// Create an object or Schema to hold the new receipt info
var receiptSchema = new Schema({
    key: { type: String },
    name: { type: String },
    link: { type: String },
    date: { type: String },
    date_unix: { type: Date, default: Date.now },
    user_id: { type : String }
});


const Receipt = module.exports = mongoose.model('Receipt', receiptSchema, 'receipts');

// ================= Helper functions =========================

// Add a new reciept to the database
module.exports.addReceipt = function(newReceipt, callback){
    newReceipt.save(callback);
}

// // Update an existing contact in the database
// module.exports.getContactById = function(id, callback){
//     Contact.findById(id, callback);
// }
