@echo off
echo Roqus Analytics Futuristinis 3D Favicon Generator
echo ================================================
echo.
echo Generuojami faviconai...
echo.

cd %~dp0..
node scripts/generate-favicon.js

echo.
echo Baigta! Faviconai buvo sugeneruoti public kataloge.
echo Galite peržiūrėti juos atidarę public/favicon-preview.html naršyklėje.
echo.
pause