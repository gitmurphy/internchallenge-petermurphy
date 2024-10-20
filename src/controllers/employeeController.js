import readEmployeeData from '../services/csvService.js';
import { isEmpty, isPositive, isValidEmail } from '../services/validationService.js';
import { v4 as uuidv4 } from 'uuid';

let employees = [];

readEmployeeData().then(data => { employees = data;
    }).catch(error => { console.error("Error reading employee data: ", error);});

export async function findAll(req, res) {
    try {
        res.send(employees);
    } catch (error) {
        res.status(500).send("Error finding employees: " );
    }
}

export async function findById(req, res) {
    const { id } = req.params;
    const foundEmployee = employees.find((employee) => employee.id === id)

    if(!foundEmployee) return res.status(404).send(`Employee with id ${id} not found.`);
    res.send(foundEmployee);
}

export async function create(req, res) {
    const employee = req.body;

    // Validation
    if (isEmpty(employee.name)) res.status(400).send(`Name field should not be empty.`);
    if (!isValidEmail(employee.email)) res.status(400).send(`${employee.email} is not a valid email address.`);
    if (isEmpty(employee.position)) res.status(400).send(`Position field should not be empty.`);
    if (!isPositive(employee.salary)) res.status(400).send(`Salary should be a positive number.`);

    employees.push({ ...employee, id: uuidv4() });

    res.send(`${employee.name} has been added to the list.`);
}

export async function remove(req, res) {
    const { id } = req.params;
    employees = employees.filter((employee) => employee.id !== id)
  
    res.send(`${id} removed successfully from the list.`);
}

export async function update(req, res) {
    const { id } = req.params;
    const { name, email, position, salary} = req.body;
    const employee = employees.find((employee) => employee.id === id)
  
    if(name) {
        if (isEmpty(employee.name)) res.status(400).send(`Name field should not be empty.`);
        employee.name = name;
    }
    if(email) {
        if (!isValidEmail(employee.email)) res.status(400).send(`${employee.email} is not a valid email address.`);
        employee.email = email;
    }
    if(position) {
        if (isEmpty(employee.position)) res.status(400).send(`Position field should not be empty.`);
        employee.position = position;
    }
    if(salary) {
        if (!isPositive(employee.salary)) res.status(400).send(`Salary should be a positive number.`);
        employee.salary = salary;
    }
  
    res.send(`Employee with the id ${id} has been updated.`);
}