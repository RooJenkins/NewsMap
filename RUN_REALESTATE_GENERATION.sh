#!/bin/bash

# Real Estate & Housing Category Summary Generation Script
# This script generates summaries for all 143 countries in the NewsMap application

# Check if ANTHROPIC_API_KEY is set
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "❌ ANTHROPIC_API_KEY is not set in the environment"
    echo ""
    echo "To run this script, set the environment variable:"
    echo "  export ANTHROPIC_API_KEY='your-api-key-here'"
    echo ""
    echo "Then run:"
    echo "  bash /home/user/NewsMap/RUN_REALESTATE_GENERATION.sh"
    exit 1
fi

cd /home/user/NewsMap

echo "🚀 Starting Real Estate & Housing Summary Generation"
echo "✅ ANTHROPIC_API_KEY is set"
echo ""

# Run the generation script
node ./scripts/generate-realestate-complete.mjs

echo ""
echo "✅ Script execution completed!"
echo ""
echo "To check the results, run:"
echo "  sqlite3 ./prisma/dev.db 'SELECT name, category, LENGTH(summary) as summary_length FROM LocationSummary WHERE category = \"realestate\" ORDER BY name;'"
