#!/bin/bash

# OTG Track Manager - Deployment Script for Vercel
# This script helps prepare and deploy the application to Vercel

set -e

echo "🚀 OTG Track Manager - Vercel Deployment"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check prerequisites
echo -e "${BLUE}Step 1: Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 18.x"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo -e "${GREEN}✓ Node.js ${NC}$(node -v)"
echo -e "${GREEN}✓ npm ${NC}$(npm -v)"
echo ""

# Step 2: Install dependencies
echo -e "${BLUE}Step 2: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 3: Check environment variables
echo -e "${BLUE}Step 3: Checking environment variables...${NC}"

if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠ .env file not found. Creating template...${NC}"
    cat > .env << EOF
# Database Connection for PostgreSQL
DATABASE_URL="postgresql://user:password@host:5432/database"

# Gemini API Key
GEMINI_API_KEY="your-api-key"

# Server Configuration
PORT=3001
NODE_ENV=development
EOF
    echo -e "${YELLOW}⚠ Please update .env with your actual values${NC}"
else
    echo -e "${GREEN}✓ .env file exists${NC}"
fi
echo ""

# Step 4: Build the application
echo -e "${BLUE}Step 4: Building the application...${NC}"
npm run build
echo -e "${GREEN}✓ Build completed${NC}"
echo ""

# Step 5: Check for git
echo -e "${BLUE}Step 5: Checking git setup...${NC}"

if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠ Git repository not initialized. Initializing...${NC}"
    git init
    git add .
    git commit -m "Initial commit: OTG Track Manager"
    git branch -M main
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${GREEN}✓ Git repository exists${NC}"
fi
echo ""

# Step 6: Check for Vercel CLI
echo -e "${BLUE}Step 6: Checking Vercel CLI...${NC}"

if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠ Vercel CLI not installed. Installing...${NC}"
    npm install -g vercel
fi

echo -e "${GREEN}✓ Vercel CLI ready${NC}"
echo ""

# Step 7: Display next steps
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Preparation completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

echo "📝 Next steps:"
echo "1. Update .env file with your database and API key"
echo "2. Commit and push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for Vercel'"
echo "   git push origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   vercel --prod"
echo ""
echo "Or visit: https://vercel.com/new and import your GitHub repository"
echo ""
echo "📖 For detailed instructions, see: VERCEL_DEPLOYMENT.md"
