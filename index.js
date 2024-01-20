// Imports from packages
const express = require('express');
const mongoose = require('mongoose');

//  imports from other files
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://tosh:lxgiwyliwyL1999@cluster0.ik0gdwu.mongodb.net/?retryWrites=true&w=majority";


// Middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose.connect(DB).then(()=>{
    console.log("Connection Succesful")
}).catch((e)=>{
    console.log(e)
})

// Listener

app.listen(PORT,"0.0.0.0", ()=>{
    console.log(`Server is running on port ${PORT}`)
})

