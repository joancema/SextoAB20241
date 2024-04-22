-- CreateTable
CREATE TABLE "CiudadanoModel" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT,

    CONSTRAINT "CiudadanoModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreguntaModel" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "PreguntaModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespuestaModel" (
    "id" SERIAL NOT NULL,
    "ciudadanoId" INTEGER NOT NULL,
    "preguntaId" INTEGER NOT NULL,

    CONSTRAINT "RespuestaModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CiudadanoModel_nombre_key" ON "CiudadanoModel"("nombre");

-- AddForeignKey
ALTER TABLE "RespuestaModel" ADD CONSTRAINT "RespuestaModel_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "CiudadanoModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaModel" ADD CONSTRAINT "RespuestaModel_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "PreguntaModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
