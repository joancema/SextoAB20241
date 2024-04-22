/*
  Warnings:

  - A unique constraint covering the columns `[preguntaId,ciudadanoId]` on the table `RespuestaModel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RespuestaModel_preguntaId_ciudadanoId_key" ON "RespuestaModel"("preguntaId", "ciudadanoId");
