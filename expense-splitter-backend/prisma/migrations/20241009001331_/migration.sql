/*
  Warnings:

  - Added the required column `dateOfExpense` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `divideBy` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidPer` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "dateOfExpense" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "divideBy" INTEGER NOT NULL,
ADD COLUMN     "paidPer" TEXT NOT NULL;
