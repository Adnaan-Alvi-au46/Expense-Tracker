const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const expenseSchema = new Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
    },
    // userId:{
    //     type:String,
    // },
    title:{
        type:String,
        require:true
    },
    amount:{
        type:String,
        require:true,
      
    },
    date:{
        type:Date,
        default: Date.now()
    },
    delete:{
        type:Boolean,
        require:true
    }
})

const expenseModel= mongoose.model('expenses',expenseSchema)
module.exports=expenseModel;