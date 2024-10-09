import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createDeb = async (data: {
    amount: number;
    paidPer: string;
    description: string;
    dateOfExpense: Date;
    divideBy: number;
    userId: number;
}) => {
    return await prisma.expense.create({
        data: {
            amount: data.amount,
            description: data.description,
            userId: data.userId,
            paidPer: data.paidPer,
            dateOfExpense: data.dateOfExpense,
            divideBy: data.divideBy,
        }
    });
};
