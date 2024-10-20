import express from 'express';
import bodyParser from 'body-parser';
import readEmployeeData from './services/csvService.js';
import employeeRoutes from './routes/employees.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// use employeeRoutes for every request to the /employees path
app.use('/employees', employeeRoutes);

app.get('/', (req, res) => res.send('Root get route'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));