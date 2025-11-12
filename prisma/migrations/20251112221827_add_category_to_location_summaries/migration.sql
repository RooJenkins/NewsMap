-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LocationSummary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'all',
    "summary" TEXT NOT NULL,
    "issues" TEXT NOT NULL,
    "topStories" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storyCount" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_LocationSummary" ("country", "createdAt", "id", "issues", "lat", "lng", "name", "storyCount", "summary", "topStories", "type", "updatedAt") SELECT "country", "createdAt", "id", "issues", "lat", "lng", "name", "storyCount", "summary", "topStories", "type", "updatedAt" FROM "LocationSummary";
DROP TABLE "LocationSummary";
ALTER TABLE "new_LocationSummary" RENAME TO "LocationSummary";
CREATE INDEX "LocationSummary_type_idx" ON "LocationSummary"("type");
CREATE INDEX "LocationSummary_country_idx" ON "LocationSummary"("country");
CREATE INDEX "LocationSummary_category_idx" ON "LocationSummary"("category");
CREATE INDEX "LocationSummary_updatedAt_idx" ON "LocationSummary"("updatedAt");
CREATE UNIQUE INDEX "LocationSummary_name_type_category_key" ON "LocationSummary"("name", "type", "category");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
