-- CreateTable
CREATE TABLE "LocationSummary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "summary" TEXT NOT NULL,
    "issues" TEXT NOT NULL,
    "topStories" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storyCount" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE INDEX "LocationSummary_type_idx" ON "LocationSummary"("type");

-- CreateIndex
CREATE INDEX "LocationSummary_country_idx" ON "LocationSummary"("country");

-- CreateIndex
CREATE INDEX "LocationSummary_updatedAt_idx" ON "LocationSummary"("updatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "LocationSummary_name_type_key" ON "LocationSummary"("name", "type");
