const expenseDataModel = require('../model/expenseDataModel');

const addData = async(req,res)=>{
  try {
    // const {id}=req.params
        const expData = req.body;
        // console.log(expData,"hii")
        const data = {...expData,delete:'false'}
        // console.log(data,"hey")

            const result = await expenseDataModel.create(data)
            res.status(201).send({status: 'success', msg: 'exp Inserted successfully', exp: result})
        }
    catch (error) {
        // console.log(error)
        res.status(500).send({status: 'error', msg: "Error inserting expdata in DB", error})
    }
};  

const getData = async(req,res)=>{
    
    try {
            const {id} = req.params  //ask aquib 
            const result = await expenseDataModel.find({delete:false,userId:id})
            // console.log(result)
            res.status(201).send({status: 'success', exp: result})
        }
        
    catch (error) {
        // console.log("Error posting data")
        res.status(500).send({status: 'error', msg: "Error getting data from DB", error})
    }
};
const updateData = async(req,res)=>{
    
    const {expID} = req.params //{ mexpID: '639b4bfaf5b417f9399c0f3e' }
  const updatedExpData = req.body

  try {
    const updatedExp = await expenseDataModel.findByIdAndUpdate(expID, updatedExpData, {runValidators: true, new: true})
        console.log(updatedExp) 
    res.status(201).send({status: 'succes', msg: 'Expense updated successfully', exp: updatedExp})
  } catch (error) {
    console.log("Error updating exp in DB")
    res.status(500).send({status: 'error', msg: "Error updating expense in DB", error})
  }
};
const deleteData = async(req,res)=>{
    
    const {expID} = req.params //{ expID: '639b4bfaf5b417f9399c0f3e' }
//   const updatedExpData = req.body

  try {
     await expenseDataModel.updateOne({_id:expID}, {$set:{delete:true}})
    res.status(201).send({status: 'succes', msg: 'Expense deleted successfully'})
  } catch (error) {
    // console.log("Error updating expense in DB")
    res.status(500).send({status: 'error', msg: "Error deleting expense in DB", error})
  }
};

module.exports={addData,getData,updateData,deleteData}



