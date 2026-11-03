# B2 CRUD Code Snippets

A server-rendered application for creating and sharing multiline code snippets.
Built with Node.js, Express, EJS and MongoDB/Mongoose.

## Prerequisites
- Node.js and npm (tested locally with Node.js 24)
- Docker Desktop, or an existing MongoDB instance

## Setup
Run the following commands from this project's directory.

### 1. Clone repository
```bash
git clone https://gitlab.lnu.se/your-repo.git
```

### 2. Start MongoDB
With Docker Desktop running, create the database container once:
```bash
docker run -d --name b02-mongo -p 127.0.0.1:27017:27017 -v b02-mongo-data:/data/db mongo:8
```

If the container already exists, start it with:

```bash
docker start b02-mongo
```

Database data is stored in the named volume `b02-mongo-data`.

### 3. Configure environment variables
Copy `.env.example` to `.env`.

Set:

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/code_snippets
SESSION_SECRET=replace-with-your-own-random-secret
PORT=3000
```

Generate a random session secret with:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Copy the generated value into `SESSION_SECRET`.
Do not commit `.env`.

### 4. Install and start

```bash
npm install
npm start
```

Open http://localhost:3000.

The application connects to MongoDB before starting the HTTP server.

## Development

```bash
npm run dev
npm run lint
npm run eslint:fix
```

`dev` restarts the server when source files change.
`lint` checks JavaScript and configuration files using ESLint.

## Features
- Registration with unique usernames and hashed passwords
- Login and logout using server-side sessions
- Public viewing of multiline code snippets
- Creation, editing and deletion of a user's own snippets
- Server-side ownership checks
- Flash messages
- 403, 404 and 500 error views

Sessions are stored in memory, so restarting the application logs users out.
Accounts and snippets remain stored in MongoDB.

## Structure

- `app.mjs`: application startup
- `src/express.mjs`: Express configuration and database connection
- `src/routes/`: URL routing
- `src/controllers/`: request handling
- `src/models/`: Mongoose schemas and models
- `src/middleware/`: authentication and ownership checks
- `views/`: EJS templates

## Manual verification

The following checks were performed during development:

- Registration, duplicate usernames, incorrect passwords and login
- Creating, viewing, editing and deleting multiline snippets
- Anonymous access restrictions
- Rejection of another user's edit and delete requests
- Invalid and nonexistent snippet IDs
- Unknown page handling

ESLint passed. Following the EJS upgrade, `npm audit --omit=dev`
reported zero known vulnerabilities at the time of checking.
The full audit still reported 18 moderate findings in development dependencies.