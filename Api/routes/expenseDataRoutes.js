const {Router} = require('express')
const expenseDataRouter =  Router()
const {addData,getData,updateData,deleteData} = require('../controller/expenseDataController');
const { verifyToken } = require('../middleware/verifyToken');

// expenseDataRouter.use(verifyToken)
expenseDataRouter.post('/addExpense',addData)
expenseDataRouter.get('/getExpense/:id',getData)
expenseDataRouter.put('/updateExpense/:expID',updateData)
expenseDataRouter.put('/deleteExpense/:expID',deleteData)

module.exports = expenseDataRouter