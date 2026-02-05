#!/usr/bin/env bash
set -euo pipefail
npm init -y >/dev/null 2>&1 || true
npm install -D tailwindcss@3 postcss autoprefixer >/dev/null
npx tailwindcss -i ./src/input.css -o ./assets/css/tailwind.css --minify
echo "Built assets/css/tailwind.css ✅"
