-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Story" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT,
    "source" TEXT NOT NULL,
    "pubDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "city" TEXT,
    "country" TEXT,
    "region" TEXT,
    "importance" REAL NOT NULL DEFAULT 0.5,
    "isBreaking" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT,
    "aiSummary" TEXT,
    "sourceQuality" TEXT NOT NULL DEFAULT 'medium'
);
INSERT INTO "new_Story" ("category", "city", "country", "createdAt", "description", "id", "importance", "isBreaking", "lat", "link", "lng", "pubDate", "region", "source", "title") SELECT "category", "city", "country", "createdAt", "description", "id", "importance", "isBreaking", "lat", "link", "lng", "pubDate", "region", "source", "title" FROM "Story";
DROP TABLE "Story";
ALTER TABLE "new_Story" RENAME TO "Story";
CREATE UNIQUE INDEX "Story_link_key" ON "Story"("link");
CREATE INDEX "Story_lat_lng_idx" ON "Story"("lat", "lng");
CREATE INDEX "Story_pubDate_idx" ON "Story"("pubDate");
CREATE INDEX "Story_importance_idx" ON "Story"("importance");
CREATE INDEX "Story_sourceQuality_idx" ON "Story"("sourceQuality");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
