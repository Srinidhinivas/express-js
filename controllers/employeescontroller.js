data = {}
data.employees = require('../model/employees.json')

const getAllEmployee =  (req,res) =>{
    res.json(data.employees)
 }

 const createNewEmployee = (req,res)=>{
    res.json({
        "firstName":req.body.firstname,
        "lastName":req.body.lastname
    })
   }

const updateEmployee = (req,res)=>{
    res.json({
        "firstName":req.body.firstname,
        "lastName":req.body.lastname
    })
   }
const deleteEmployee = (req,res)=>{
    res.json({
        "id":req.body.id
    })
   }

const getEmployee = (req,res)=>{
    res.json({"id":req.params.id})
}

module.exports = {createNewEmployee, updateEmployee, deleteEmployee, getEmployee, getAllEmployee}