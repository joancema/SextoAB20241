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

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ciudadano" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Ciudadano_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadano_nombre_key" ON "Ciudadano"("nombre");

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
