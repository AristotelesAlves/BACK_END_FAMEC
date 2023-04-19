-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_nome_key" ON "admin"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "admin_senha_key" ON "admin"("senha");
