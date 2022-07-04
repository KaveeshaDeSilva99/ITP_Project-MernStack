const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require("body-Parser");
const cors = require("cors");
const dotenv  = require("dotenv");
const app = express();
require("dotenv").config();
const {connect} = require("mongoose")

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//     useCreateIndex : true,
//     useNewUrlParser : true,
//     useUnifiedTopologyL : true,
//     useFindAndModify : false

// });
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});


const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


const supplierRouter = require("./routes/suppliers.js");
app.use("/supplier",supplierRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on prot ${PORT}`)
})