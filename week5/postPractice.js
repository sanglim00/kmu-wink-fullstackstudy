const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    title: { type: String, unique : true, required : true },
    body: String,
});

module.exports = mongoose.model('board', Account);
