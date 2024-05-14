-- CreateTable
CREATE TABLE "Ciudadano" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Ciudadano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "texto" TEXT,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Votacion" (
    "id" SERIAL NOT NULL,
    "respuesta" BOOLEAN NOT NULL DEFAULT true,
    "ciudadanoId" INTEGER NOT NULL,
    "preguntaId" INTEGER NOT NULL,

    CONSTRAINT "Votacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadano_identificacion_key" ON "Ciudadano"("identificacion");

-- AddForeignKey
ALTER TABLE "Votacion" ADD CONSTRAINT "Votacion_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votacion" ADD CONSTRAINT "Votacion_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
