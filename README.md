# Task Manager API

A RESTful API for managing tasks built with Node.js and Express.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone or download the project
2. Navigate to the project directory:
3. Install dependencies:
npm install


4. Start the server:
node server.js


5. Server will run on `http://localhost:3002`

## API Endpoints

### GET /
- **Description:** Root endpoint
- **Response:** Welcome message

### GET /health
- **Description:** Check API health status
- **Response:** `{ "status": "healthy", "uptime": <seconds> }`

### GET /tasks
- **Description:** Retrieve all tasks
- **Response:** Array of task objects with id, title, completed, priority, and createdAt

### GET /tasks/:id
- **Description:** Retrieve a single task by ID
- **Parameters:** `id` (number) - Task ID
- **Success Response (200):** Task object
- **Error Responses:**
- 400: Invalid ID format
- 404: Task not found

### POST /tasks
- **Description:** Create a new task
- **Body:** `{ "title": "Task title" }`
- **Success Response (201):** Created task object
- **Error Response (400):** Title validation error

## Testing

Use Postman or any HTTP client to test the endpoints. Sample requests are documented in `api-responses.txt`.
