-- CreateTable
CREATE TABLE "Story" (
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
    "category" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Story_link_key" ON "Story"("link");

-- CreateIndex
CREATE INDEX "Story_lat_lng_idx" ON "Story"("lat", "lng");

-- CreateIndex
CREATE INDEX "Story_pubDate_idx" ON "Story"("pubDate");

-- CreateIndex
CREATE INDEX "Story_importance_idx" ON "Story"("importance");
