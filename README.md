# Kochmon Ordo

Статический сайт с Node.js сервером для production-деплоя.

## Requirements

- Node.js 18+ (рекомендуется Node.js 20 LTS)

## Local Run

```bash
npm run check
npm start
```

Сервер доступен на `http://localhost:3000` (или на порту из переменной `PORT`).

## Healthcheck

```bash
curl http://localhost:3000/health
```

Ожидаемый ответ: JSON с `ok: true`.

## Deploy (Docker)

```bash
docker build -t kochmon-ordo .
docker run -p 3000:3000 -e PORT=3000 kochmon-ordo
```

## Deploy to Railway

В репозитории уже есть `railway.json` с:

- `startCommand`: `npm start`
- `healthcheckPath`: `/health`

Вариант 1 (через GitHub):

1. Запушить репозиторий в GitHub.
2. В Railway выбрать `New Project` -> `Deploy from GitHub repo`.
3. Railway сам выставит `PORT`, проект стартует командой `npm start`.

Вариант 2 (через Railway CLI):

```bash
railway login
railway init
railway up
```

Проверка после деплоя:

```bash
curl https://<your-domain>/health
```
