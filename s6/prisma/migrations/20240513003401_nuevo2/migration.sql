/*
  Warnings:

  - You are about to drop the column `identificacion` on the `Ciudadano` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cedula]` on the table `Ciudadano` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cedula` to the `Ciudadano` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Ciudadano_identificacion_key";

-- AlterTable
ALTER TABLE "Ciudadano" DROP COLUMN "identificacion",
ADD COLUMN     "cedula" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "texto" TEXT,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" SERIAL NOT NULL,
    "ciudadanoId" INTEGER NOT NULL,
    "preguntaId" INTEGER NOT NULL,
    "respuesta" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadano_cedula_key" ON "Ciudadano"("cedula");

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
