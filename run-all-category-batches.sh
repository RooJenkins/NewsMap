#!/bin/bash

# run-all-category-batches.sh
# Generates Crime & Justice and Energy summaries for all 175 countries

echo "================================================================================"
echo "CATEGORY SUMMARY GENERATION - ALL 175 COUNTRIES"
echo "================================================================================"
echo ""
echo "Categories: Crime & Justice + Energy"
echo "Total countries: 175"
echo "Batches per category: 10"
echo "Total batches: 20"
echo ""

# Check for API key
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "⚠️  ERROR: ANTHROPIC_API_KEY not set"
    echo ""
    echo "Please set your Anthropic API key in /home/user/NewsMap/.env:"
    echo "  ANTHROPIC_API_KEY=sk-ant-api03-your-key-here"
    echo ""
    exit 1
fi

echo "✅ ANTHROPIC_API_KEY found"
echo ""

# Function to run a batch
run_batch() {
    local batch=$1
    local category=$2
    echo "------------------------------------------------------------"
    echo "Starting: Batch $batch - $category"
    echo "------------------------------------------------------------"
    npx tsx scripts/generate-category-batch.ts $batch $category
    echo ""
}

# Run all Crime & Justice batches
echo "================================================================================"
echo "PHASE 1: CRIME & JUSTICE (Batches 1-10)"
echo "================================================================================"
echo ""

for i in {1..10}; do
    run_batch $i "crime"
done

# Run all Energy batches
echo "================================================================================"
echo "PHASE 2: ENERGY (Batches 1-10)"
echo "================================================================================"
echo ""

for i in {1..10}; do
    run_batch $i "energy"
done

echo "================================================================================"
echo "ALL BATCHES COMPLETE"
echo "================================================================================"
echo ""
echo "Generated summaries for:"
echo "  - 175 countries × 2 categories = 350 total summaries"
echo "  - Each summary: 2,500-3,500 characters"
echo ""
echo "Run this to verify:"
echo "  npx tsx -e \"import {PrismaClient} from '@prisma/client'; const p = new PrismaClient(); p.locationSummary.groupBy({by:['category'], _count:true}).then(r=>console.log(r)).finally(()=>p.\\\$disconnect())\""
echo ""
