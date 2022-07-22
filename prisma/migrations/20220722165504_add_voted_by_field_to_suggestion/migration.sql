-- AlterTable
ALTER TABLE "User" ADD COLUMN     "suggestionsVotedById" TEXT;

-- CreateTable
CREATE TABLE "SuggestionVotedBy" (
    "id" TEXT NOT NULL,
    "suggestionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SuggestionVotedBy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_suggestionsVotedById_fkey" FOREIGN KEY ("suggestionsVotedById") REFERENCES "SuggestionVotedBy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuggestionVotedBy" ADD CONSTRAINT "SuggestionVotedBy_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "Suggestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
