const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        // trim means it will trim white space off the end
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;