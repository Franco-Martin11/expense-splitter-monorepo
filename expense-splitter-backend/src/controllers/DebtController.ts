import { Request, Response } from "express";
import { createDeb } from '../services/createDebt'
export const crateDebController = async (req: Request, res: Response) => {
    const { amount, dateOfExpense, description, divideBy, paidPer, userId } = req.body

    const createDebtPost = await createDeb({ amount, dateOfExpense, description, divideBy, paidPer, userId })
    res.status(200).json({
        ok: true, createDebt: {
            message: 'Success',
            paidPer: createDebtPost.paidPer,
            amount: createDebtPost.amount,
            dateOfExpense: createDebtPost.dateOfExpense,
        }
    })
}