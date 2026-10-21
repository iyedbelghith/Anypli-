# Project Manager

Internship project at Anypli: project management app.

- `back/`: Laravel 12 REST API (JWT auth)
- `front/`: React 19 + TypeScript + Vite + MUI

## Run

### Backend
```bash
cd back
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve
```

### Frontend
```bash
cd front
npm install
cp .env.example .env
npm run dev
```
