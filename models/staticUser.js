// Bring in the dependencies
const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

var staticUserSchema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    isRegistered: { type: Boolean, default: false }
});

const StaticUser = module.exports = mongoose.model('StaticUser', staticUserSchema, 'users');
