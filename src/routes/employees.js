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

router.get('/', (req, res) => {
    res.send(employees);
})

router.post('/', (req, res) => {
    // Take employee data from body of POST request
    const employee = req.body;

    // Add employee with uniquely generated id to employees array
    employees.push({ ...employee, id: uuidv4() });
    
    // Send response back to client
    res.send(`${employee.name} has been added to the Array.`);
})

export default router