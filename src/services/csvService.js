import csv from 'csv-parser';
import fs from 'fs';

// createReadStream creates a stream to read larger files in pieces defined by a buffer amount
// Hence the operation is asynchronous and returns a promise

async function readEmployeeData() {
  return new Promise((resolve, reject) => {
    let employees = [];

    fs.createReadStream('src/data.csv')
      .pipe(csv())
      .on('data', (data) => employees.push(data))
      .on('end', () => resolve(employees))
      .on('error', error => reject(error));
  });
}

export default readEmployeeData;