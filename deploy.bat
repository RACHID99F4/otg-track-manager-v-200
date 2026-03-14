@echo off
REM OTG Track Manager - Deployment Script for Vercel (Windows)
REM This script helps prepare and deploy the application to Vercel

setlocal enabledelayedexpansion

echo.
echo 🚀 OTG Track Manager - Vercel Deployment
echo ========================================
echo.

REM Colors (PowerShell style output)
cls

REM Step 1: Check prerequisites
echo Step 1: Checking prerequisites...
echo.

node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js ^>= 18.x
    pause
    exit /b 1
)

npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VER=%%i

echo ✓ Node.js %NODE_VER%
echo ✓ npm %NPM_VER%
echo.

REM Step 2: Install dependencies
echo Step 2: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

REM Step 3: Check environment variables
echo Step 3: Checking environment variables...

if not exist .env (
    echo ⚠ .env file not found. Creating template...
    (
        echo # Database Connection for PostgreSQL
        echo DATABASE_URL="postgresql://user:password@host:5432/database"
        echo.
        echo # Gemini API Key
        echo GEMINI_API_KEY="your-api-key"
        echo.
        echo # Server Configuration
        echo PORT=3001
        echo NODE_ENV=development
    ) > .env
    echo ⚠ Please update .env with your actual values
) else (
    echo ✓ .env file exists
)
echo.

REM Step 4: Build the application
echo Step 4: Building the application...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✓ Build completed
echo.

REM Step 5: Check for git
echo Step 5: Checking git setup...

git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    echo ⚠ Git repository not initialized. Initializing...
    git init
    git add .
    git commit -m "Initial commit: OTG Track Manager"
    git branch -M main
    echo ✓ Git repository initialized
) else (
    echo ✓ Git repository exists
)
echo.

REM Step 6: Check for Vercel CLI
echo Step 6: Checking Vercel CLI...

vercel --version >nul 2>&1
if errorlevel 1 (
    echo ⚠ Vercel CLI not installed. Installing...
    call npm install -g vercel
)
echo ✓ Vercel CLI ready
echo.

REM Step 7: Display next steps
echo ========================================
echo ✓ Preparation completed successfully!
echo ========================================
echo.

echo 📝 Next steps:
echo 1. Update .env file with your database and API key
echo 2. Commit and push to GitHub:
echo    git add .
echo    git commit -m "Ready for Vercel"
echo    git push origin main
echo.
echo 3. Deploy to Vercel:
echo    vercel --prod
echo.
echo Or visit: https://vercel.com/new and import your GitHub repository
echo.
echo 📖 For detailed instructions, see: VERCEL_DEPLOYMENT.md
echo.

pause
