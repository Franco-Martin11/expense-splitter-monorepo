// src/routes/authRoutes.ts

import express from 'express';
import { crateDebController } from '../controllers/DebtController';

const debtRouter = express.Router();

debtRouter.post('/createDebt', crateDebController);


export default debtRouter;
