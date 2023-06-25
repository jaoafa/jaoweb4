$ErrorActionPreference = "stop"

Set-Location $PSScriptRoot

# check exists venv
if (!(Test-Path -Path venv)) {
  python3 -mvenv venv
}

# activate venv
venv\Scripts\activate
pip install -r requirements.txt

mkdocs serve --dev-addr=0.0.0.0:8080
