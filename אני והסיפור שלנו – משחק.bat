@echo off
set "BASE=%~dp0"
set "GAME=%BASE%AmIsraelGame\index.html"

if not exist "%GAME%" (
  echo ERROR: cannot find "%GAME%"
  pause
  exit /b
)

start "" "%GAME%"
exit
