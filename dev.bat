@echo off

start cmd /k "npm run prettier && npm run dev"
php artisan serve