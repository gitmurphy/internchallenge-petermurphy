import express from 'express';
import readEmployeeData from '../services/csvService.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let employees = [];

readEmployeeData()
    .then(data => {
    employees = data;
    })
    .catch(error => {
    console.error("Error reading employee data: ", error);
    });

// req: request from client
// res: response from server
router.get('/', (req, res) => {
    res.send(employees);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundEmployee = employees.find((employee) => employee.id === id)

    res.send(foundEmployee)
});

router.post('/', (req, res) => {
    // Take employee data from body of POST request
    const employee = req.body;

    // Add employee with uniquely generated id to employees array
    employees.push({ ...employee, id: uuidv4() });
    
    // Send response back to client
    res.send(`${employee.name} has been added to the Array.`);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    employees = employees.filter((employee) => employee.id !== id)
  
    res.send(`${id} deleted successfully from database`);
  });

router.patch('/:id', (req, res) => {
    const { id } = req.params;
  
    const { name, email, position, salary} = req.body;
  
    const employee = employees.find((employee) => employee.id === id)
  
    if(name) employee.name = name;
    if(email) employee.email = email;
    if(position) employee.position = position;
    if(salary) employee.salary = salary;
  
    res.send(`Employee with the id ${id} has been updated`)
  });

export default router