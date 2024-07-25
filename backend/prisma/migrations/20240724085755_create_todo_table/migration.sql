-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);
