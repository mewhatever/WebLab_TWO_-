A RESTful API built with Node.js and Express for managing tasks, developed as part of CSE 362 Web Programming II LAB coursework.

# Task Management API

A RESTful API built with Node.js and Express for managing tasks.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Postman (for API testing)

## Setup Instructions

1. Clone the repository:

2. Install dependencies:

3. Run the server:

4. The server will start at `http://localhost:3000`

## Project Structure

## API Endpoints

### Root Endpoint
- **GET** `/` - Check if API is running
  - Response: `"Task Management API is running!"`

### Health Check
- **GET** `/health` - Check server health and uptime
  - Response: 
    ```
    {
      "status": "healthy",
      "uptime": 123.456
    }
    ```

### Tasks Endpoints
- **GET** `/tasks` - Get all tasks
  - Response: Array of task objects with id, title, completed, priority, and createdAt

- **GET** `/task/:id` - Get a single task by ID
  - Response: Single task object
  - Error responses:
    - `400`: Invalid ID format
    - `404`: Task not found

## Testing with Postman

1. Start the server with `npm start`
2. Open Postman
3. Test each endpoint:
   - GET `http://localhost:3000/`
   - GET `http://localhost:3000/health`
   - GET `http://localhost:3000/tasks`
   - GET `http://localhost:3000/task/1`
   - GET `http://localhost:3000/task/999` (test 404)
   - GET `http://localhost:3000/task/abc` (test 400)

## Development

To modify routes, edit files in the `src/routes/` directory.

## License

MIT

task-management/
├── .git/
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── node_modules/
├── tasks-response.json
├── api-responses.txt
└── src/
    ├── index.js
    └── routes/
        └── tasks.js

=== API Response Documentation ===

1. GET /health
Status: 200 OK
Response:
{
  "status": "healthy",
  "uptime": 45.678
}

2. GET /task/1
Status: 200 OK
Response:
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false,
  "priority": "high",
  "createdAt": "2025-10-01T00:00:00.000Z"
}

3. GET /task/999 (Task not found)
Status: 404 Not Found
Response:
{
  "error": "Task not found"
}

4. GET /task/abc (Invalid ID format)
Status: 400 Bad Request
Response:
{
  "error": "Invalid ID format"
}
