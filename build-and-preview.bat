@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Сборка проекта...
call npm run build
if %errorlevel% neq 0 (
  echo Ошибка сборки. Убедитесь, что Node.js установлен: https://nodejs.org
  pause
  exit /b 1
)
echo.
echo Сборка завершена. Папка dist готова.
echo Запускаю превью на http://localhost:4173 ...
call npm run preview
pause
