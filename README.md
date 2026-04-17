# Feedback App — Backend

REST API built with Node.js, Express, and MongoDB for the Feedback Board application.

---

## Tech Stack

| Tool     | Purpose                         |
| -------- | ------------------------------- |
| Node.js  | JavaScript runtime              |
| Express  | HTTP server and routing         |
| MongoDB  | Database                        |
| Mongoose | MongoDB ODM (schema + queries)  |
| CORS     | Cross-origin request handling   |
| dotenv   | Environment variable management |

---

## Project Structure

```
server/
├── models/
│   └── Feedback.js       # Mongoose schema and model
├── routes/
│   └── feedback.js       # POST and GET route handlers
├── .env                  # Environment variables (not committed)
├── .env.example          # Template for environment variables
└── index.js              # App entry point — DB connect + server start
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- A MongoDB Atlas account (free tier works)

### Installation

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

> To get your `MONGO_URI`: go to [MongoDB Atlas](https://cloud.mongodb.com) → your cluster → Connect → Drivers → copy the connection string. Replace `<password>` with your DB user password.

### Run the server

```bash
node index.js
```

Server starts at `http://localhost:5000`

---

## API Reference

### Base URL

```
http://localhost:5000/api/feedback
```

---

### `POST /api/feedback`

Submit a new feedback entry.

**Request Body**

```json
{
  "name": "Vishal Kumar",
  "feedback": "Great experience overall!"
}
```

**Success Response** — `201 Created`

```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Vishal Kumar",
    "feedback": "Great experience overall!",
    "createdAt": "2024-05-23T10:30:00.000Z",
    "updatedAt": "2024-05-23T10:30:00.000Z"
  }
}
```

**Error Response** — `400 Bad Request`

```json
{
  "message": "Name and feedback are required."
}
```

---

### `GET /api/feedback?page=1&limit=5`

Fetch paginated feedback entries, sorted newest first.

**Query Parameters**

| Param   | Type   | Default | Description      |
| ------- | ------ | ------- | ---------------- |
| `page`  | number | 1       | Page number      |
| `limit` | number | 5       | Entries per page |

**Success Response** — `200 OK`

```json
[
  {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Vishal Kumar",
    "feedback": "Great experience overall!",
    "createdAt": "2024-05-23T10:30:00.000Z",
    "updatedAt": "2024-05-23T10:30:00.000Z"
  }
]
```

---

## Validation Rules

| Field      | Rules                      |
| ---------- | -------------------------- |
| `name`     | Required, non-empty string |
| `feedback` | Required, non-empty string |

Validation is handled server-side in the route before any DB write.

---

## Deployment

This backend is deployable on [Render](https://render.com) (free tier).

1. Push your code to GitHub
2. Go to Render → New → Web Service → connect your repo
3. Set **Root Directory** to `server`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `node index.js`
6. Add environment variables (`MONGO_URI`, `PORT`) in the Render dashboard

---

## Environment Variables Reference

| Variable    | Description                                |
| ----------- | ------------------------------------------ |
| `MONGO_URI` | Full MongoDB Atlas connection string       |
| `PORT`      | Port the server listens on (default: 5000) |
