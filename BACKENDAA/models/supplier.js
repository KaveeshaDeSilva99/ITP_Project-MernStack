const mongoose = require('mongoose');

const schema = mongoose.Schema;

const supplierSchema = new schema({
    name : {
        type : String,
        required : true

    },

    nic : {
        type : String,
        required : true

    },

    address : {
        type : String,
        required : true

    },
    email_address : {
        type : String,
        required : true

    },
    estate_name: {
        type : String,
        required : true

    },

    route : {
        type : String,
        required : true
    },

    
    
    bank : {
        type : String,
        required : true

    },

   

    account_no : {
        type : Number,
        required : true

    }
})
const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;
