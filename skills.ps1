# Skills Installation (Windows PowerShell)
New-Item -ItemType Directory -Force -Path ".agent/skills"
Copy-Item -Recurse -Force "c:/Users/LENOVO/OneDrive/Desktop/target harian/.agents/skills/*" ".agent/skills/"
Write-Host "Pro Max Skills Installed Successfully." -ForegroundColor Green
