/*
  Warnings:

  - You are about to drop the column `suggestionsVotedById` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SuggestionVotedBy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SuggestionVotedBy" DROP CONSTRAINT "SuggestionVotedBy_suggestionId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_suggestionsVotedById_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "suggestionsVotedById";

-- DropTable
DROP TABLE "SuggestionVotedBy";
