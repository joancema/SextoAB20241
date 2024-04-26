/*
  Warnings:

  - Added the required column `respuesta` to the `Respuesta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Respuesta" ADD COLUMN     "respuesta" BOOLEAN NOT NULL;
