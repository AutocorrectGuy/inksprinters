@echo off

start cmd /k "npm run dev"
start cmd /k "php artisan serve"
start chrome http://localhost:8000/