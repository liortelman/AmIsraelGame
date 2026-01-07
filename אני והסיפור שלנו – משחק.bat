@echo off
setlocal EnableExtensions

REM --- Use SHORT PATH for the folder of this BAT (avoids Hebrew/spaces issues) ---
set "ROOT=%~sdp0"
set "GAME=%ROOT%AmIsraelGame\index.html"

if not exist "%GAME%" (
  echo ERROR: File not found: "%GAME%"
  pause
  exit /b 1
)

REM --- Convert to file URL ---
set "URL=file:///%GAME:\=/%"

REM --- Chrome first ---
set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (
  start "" "%CHROME%" --app="%URL%" --start-maximized
  exit /b 0
)

set "CHROME=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if exist "%CHROME%" (
  start "" "%CHROME%" --app="%URL%" --start-maximized
  exit /b 0
)

REM --- Edge fallback ---
set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" (
  start "" "%EDGE%" --app="%URL%" --start-maximized
  exit /b 0
)

set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" (
  start "" "%EDGE%" --app="%URL%" --start-maximized
  exit /b 0
)

echo ERROR: Chrome/Edge not found.
pause
exit /b 1
