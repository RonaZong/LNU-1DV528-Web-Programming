# B2 CRUD Code Snippets

## Prerequisites
- Node.js v18+
- MongoDB

## Setup
1. Clone repository: `git clone https://gitlab.lnu.se/your-repo.git`
2. Install dependencies: `npm install`
3. Create `.env` file using `.env.example`
4. Start MongoDB: `mongod` (or use Docker)


5. Start application: `npm start`

## Features
- User registration/login
- Create/read/update/delete snippets
- Session-based authentication
- Ownership verification
- Flash messages
- Error handling (403, 404, 500)
## Local recovery / startup

Run commands from this directory. The application connects to MongoDB before
listening on port 3000, and stops if the database connection fails.

1. Start MongoDB (local service, Docker, or an existing remote database).
2. If `.env` does not exist, copy `.env.example` to `.env`.
3. Set `MONGODB_URI` and a random `SESSION_SECRET` in `.env`.
4. Run `npm install`, then `npm start`.
5. Open http://localhost:3000/auth/register.

Use `npm run dev` for automatic restarts during development.
If Windows npm points to a missing AppData npm-cli.js, this machine also has
an npm entry point at `C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js`:

```powershell
node 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' install
node app.mjs
```

### Verification still required

- Register, reject duplicate usernames, log in, and log out.
- Create, list, edit, and delete multiline snippets.
- Verify anonymous users cannot modify snippets.
- Verify a second account cannot edit or delete the first account's snippets.
- Repair and run lint without suppressing errors.

The initial recovery changes passed JavaScript syntax checks. Runtime and
database checks have not yet been completed.
