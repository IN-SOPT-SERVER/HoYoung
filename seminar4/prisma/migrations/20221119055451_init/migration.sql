-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" VARCHAR(100) NOT NULL,
    "age" INTEGER,
    "email" VARCHAR(400) NOT NULL,
    "password" VARCHAR(400) NOT NULL,

    CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_uindex" ON "User"("id");
