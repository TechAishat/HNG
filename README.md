# Backend Wizards Stage 0 — Profile Endpoint

## Overview
This project implements a simple Express server that exposes a `/me` endpoint. It returns your profile information together with a live cat fact fetched from the public [Cat Facts API](https://catfact.ninja/fact).

## Requirements
- Node.js 18+
- npm 9+

## Getting Started
1. Install dependencies:
```
npm install
```
2. Configure environment variables (optional, defaults shown below):
```
USER_EMAIL=aaishat122@gmail.com
USER_NAME="techaishat"
USER_STACK="Node.js/Express"
PORT=3000
CAT_FACT_TIMEOUT_MS=5000
CAT_FACT_FALLBACK="Cat fact service is currently unavailable."
```
3. Start the server:
```
npm start
```
4. Call the endpoint:
```
curl http://localhost:3000/me
```

## Response Format
Example response:
```json
{
  "status": "success",
  "user": {
    "email": "aaishat122@gmail.com",
    "name": "techaishat",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

## Notes
- A fresh cat fact is fetched on each request using Axios and the Cat Facts API.
- If the external API fails, the `CAT_FACT_FALLBACK` message (or a built-in default) is returned.
- Override the environment variables above if you need to supply different profile details in another environment.
