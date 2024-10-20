import express from 'express';
import { findAll, findById, create, remove, update } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', create);
router.delete('/:id', remove);
router.patch('/:id', update);

export default router