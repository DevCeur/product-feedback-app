/*
  Warnings:

  - You are about to drop the column `suggestionCategoryId` on the `Suggestion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Suggestion" DROP CONSTRAINT "Suggestion_suggestionCategoryId_fkey";

-- AlterTable
ALTER TABLE "Suggestion" DROP COLUMN "suggestionCategoryId",
ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SuggestionCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
