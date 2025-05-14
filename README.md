# Express CRUD API

A simple REST API built with **Express.js** and **SQLite**.

---

## Features

* Basic CRUD operations (Create, Read, Update, Delete)
* Uses SQLite as the database
* Organized in controllers, models, and routes
* Error handling middleware

---

## Project Structure

```
express-crud/
├── controllers/
├── database/
├── models/
├── routes/
├── middleware/
├── server.js
└── package.json
```

---

## Getting Started

```bash
npm install
npm start
```

Server runs on `http://localhost:8000`

---

## API Endpoints

| Method | Route           | Description    |
| ------ | --------------- | -------------- |
| GET    | /api/posts      | Get all posts  |
| GET    | /api/posts/\:id | Get post by ID |
| POST   | /api/posts      | Create a post  |
| PUT    | /api/posts/\:id | Update a post  |
| DELETE | /api/posts/\:id | Delete a post  |

---

## Tech

* Node.js
* Express
* SQLite -- in the feature/db branch
