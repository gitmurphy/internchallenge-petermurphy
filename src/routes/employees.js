import express from 'express';
import readEmployeeData from '../services/csvService.js';

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

export default router