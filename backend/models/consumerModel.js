const mongoose = require('mongoose');

const consumerSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    altPhone: {
        type: String
    },
    role: {
        type: String,
        default: "consumer"
    }
});

const Consumer = new mongoose.model('Consumer', consumerSchema);

module.exports = Consumer;