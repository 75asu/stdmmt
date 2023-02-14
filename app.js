const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/student-route');
const cors = require('cors');
const app = express();
const path = require('path');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/students", router);

// STATIC FILES
app.use(express.static(path.join(__dirname, "./stdmgmt/build")))

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname,"./stdmgmt/build/index.html"),
        function(err) {
            res.status(500).send(err)
        }
    );
});


// DATABASE CONNECTIVITY
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:EzNaL4SNVj4OZl2z@cluster0.n2amkoa.mongodb.net/stdmgmtdb?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"))
        .then(() => {
            app.listen(5000);
    })
    .catch((err) => console.log(err));
// console.log("hello world")



// mongodb+srv://admin:<password>@cluster0.n2amkoa.mongodb.net/?retryWrites=true&w=majority 