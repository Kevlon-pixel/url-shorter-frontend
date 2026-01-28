## Сократитель URL (frontend)

Клиентская часть веб‑приложения по сокращению ссылок на React.

### Требования

- Node.js 20+
- npm 10+
- Docker + Docker Compose (опционально)

### Переменные окружения

Скопируйте переменные из `.env.example` и заполните `.env`:

- `REACT_APP_SERVER_URL` — адрес backend API

### Пошаговая инструкция для локальной разработки

```bash
1. npm install
2. npm start
```

### Docker

```bash
docker compose up --build -d
```
