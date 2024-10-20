import { findById, employees } from "../controllers/employeeController";
import readEmployeeData from '../services/csvService.js';

describe('Find employees', () => {
    beforeAll(async () => {
        await readEmployeeData().then(data => { employees.push(...data);
        }).catch(error => { console.error("Error reading employee data: ", error);});
    });

    const mockReq = {
        params: { id: "561dd3a4-994f-4a4e-b8a0-682e52d1b39d" }
    };
    
    const mockRes = {
        status: jest.fn().mockReturnThis(), // return the mock function to enable chaining
        send: jest.fn()
    };
    
    it('Should get employee by id', () => {
        findById(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalled();
        expect(mockRes.send).toHaveBeenCalledWith({
                id : "561dd3a4-994f-4a4e-b8a0-682e52d1b39d",
                name : "John Doe",
                email : "john.doe@example.com",
                position : "Software Engineer",
                salary : "75000"
            });
        expect(mockRes.send).toHaveBeenCalledTimes(1);
    })
});
