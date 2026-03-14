@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Запуск dev-сервера...
echo Откройте http://localhost:5173 в браузере
echo Изменения в коде подгрузятся автоматически.
echo.
call npm run dev
pause
