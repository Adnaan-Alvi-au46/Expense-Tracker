const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const connectDB = require('./dbConfig');
const userRouter = require('./routes/userRoutes');
const expenseDataRouter = require('./routes/expenseDataRoutes');
const cookieparser = require('cookie-parser')

const prt = process.env.PORT || 6060
// const prt = 6060


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieparser())

app.use(userRouter)
app.use(expenseDataRouter)

app.listen(prt,(error)=>{

if(!error){
    console.log('server started sucessfull at 6060')
    connectDB()
}
else{
    console.log(error)
}
})