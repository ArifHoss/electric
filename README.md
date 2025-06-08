# electric

# Fullstack Project: React + Express + PostgreSQL

# Step 1: Clone and enter project
git clone https://github.com/ArifHoss/electric.git
cd electric

# Step 2: Start PostgreSQL container
docker run --name mydb_container \
-e POSTGRES_PASSWORD=root \
-e POSTGRES_DB=mydb \
-p 5432:5432 \
-v pgdata:/var/lib/postgresql/data \
-d postgres

# Step 3: Backend setup
cd backend
cp .env.example .env
npm install
npm run dev

# Need to have this on .env
DB_NAME=mydb
DB_USER=postgres
DB_PASS=root
DB_HOST=localhost
DB_PORT=5432
PORT=3001

# Step 4: Frontend setup (in new terminal)
cd ../frontend
npm install
npm run dev

## 📦 Project Structure

project-root/
├── frontend/         # React app (Vite)
└── backend/          # Express server with PostgreSQL (TypeScript)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ArifHoss/electric.git
cd electric


⸻

🖥️ Frontend (React + Vite)

Setup

$ cd frontend
$ npm create vite@latest .
$ npm install
$ npm run dev
$
App runs at: http://localhost:5173

⸻

🔧 Backend (Express + TypeScript + PostgreSQL)

Setup

cd backend
$ npm init -y
$ npm install --save-dev \
  @types/cors \
  @types/express \
  @types/node \
  concurrently \
  nodemon \
  typescript
$ npx tsc --init # Skapar tsconfig.json
$ echo node_modules >> .gitignore
$ echo "*.js" >> .gitignore
$
$ npm run dev

Configure Environment Variables

Create a .env file in backend/:

DB_NAME=mydb
DB_USER=postgres
DB_PASS=root
DB_HOST=localhost
DB_PORT=5432
PORT=3001


⸻

Run the Server

npm run dev

API runs at: http://localhost:3001

⸻

🐘 PostgreSQL with Docker

Start a PostgreSQL container:

docker run --name mydb_container \
  -e POSTGRES_PASSWORD=root \
  -e POSTGRES_DB=mydb \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  -d postgres


⸻

📂 Common Commands

Frontend
	•	npm run dev — start Vite dev server
	•	npm run build — build for production

Backend
	•	npm run dev — start dev server with ts-node-dev
	•	npm run build — compile TypeScript

⸻

✨ Features
	•	React (Vite) + Express + PostgreSQL
	•	Sequelize ORM
	•	TypeScript on backend
	•	Docker-based DB setup
	•	REST API routing

⸻

