import express from 'express';
import bodyParser from 'body-parser';
import readEmployeeData from './services/csvService.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// readEmployeeData returns a promise which is a success (then) or a failure (catch)
readEmployeeData()
    .then(data => {
    const employees = data;
    console.log("returned:", employees);
    })
    .catch(error => {
    console.error("Error reading employee data: ", error);
    });

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));