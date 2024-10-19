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
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundEmployee = employees.find((employee) => employee.id === id)

    res.send(foundEmployee)
});

router.post('/', (req, res) => {
    const employee = req.body;

    if (employee.name === undefined || employee.name === "") { 
        res.send(`Name field should not be empty.`);
    }

    if (!validatEmail(employee.email)) {
        res.send(`${employee.email} is not a valid email address.`);
    }

    if (employee.position === undefined || employee.position === "") { 
        res.send(`Position field should not be empty.`);
    }

    if (employee.salary < 0) {
        res.send(`Salary should be a positive number.`);
    }

    employees.push({ ...employee, id: uuidv4() });
    
    res.send(`${employee.name} has been added to the list.`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    employees = employees.filter((employee) => employee.id !== id)
  
    res.send(`${id} deleted successfully from list.`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { name, email, position, salary} = req.body;
  
    const employee = employees.find((employee) => employee.id === id)
  
    if(name) employee.name = name;
    if(email) employee.email = email;
    if(position) employee.position = position;
    if(salary) employee.salary = salary;
  
    res.send(`Employee with the id ${id} has been updated.`)
});

function validatEmail(email) {
    const regex = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$');
    return regex.test(email);
}

export default router