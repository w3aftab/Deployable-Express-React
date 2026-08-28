# Deployable Express React Scaffold

A clean full-stack starter template combining Express 5 on the backend and React 19 + Vite on the frontend. This scaffold is designed for quick local development and simple deployment to Render.

Author: Aftab Ahmed

## Overview

- Backend: Express server serving the built frontend and exposing health checks
- Frontend: React app powered by Vite
- Development: Runs both frontend and backend concurrently
- Deployment: Production build is served by Express from the `frontend/dist` folder

## Features

- API endpoint at `/api/health` for health checks and uptime monitoring
- Vite dev server with proxying to the backend during local development
- Production-ready static file serving from Express
- Render deployment configuration included via `render.yaml`

## Project structure

```text
Deployable-Express-React-Scaffold/
├── server.js                # Express server entry point
├── render.yaml              # Render deployment config
├── package.json             # Root scripts and dependencies
├── README.md                # Project documentation
├── frontend/
│   ├── package.json         # Frontend dependencies and scripts
│   ├── index.html           # Vite HTML entry
│   ├── vite.config.js       # Vite config
│   └── src/                 # React application source
└── public/                  # Static assets if added later
```

## Prerequisites

- Node.js 20+
- npm

## Get the template from GitHub

Clone the repository and open the project locally. Replace `<your-username>` with the GitHub account that owns the repository:

```bash
git clone https://github.com/w3aftab/Deployable-Express-React-Scaffold.git
cd Deployable-Express-React-Scaffold
```

You can also select **Code** and then **Download ZIP** on the GitHub repository page. Extract the ZIP file, open the project folder in VS Code, and continue with the installation steps below.

[Download the `download-file` branch](https://github.com/w3aftab/Deployable-Express-React-Scaffold/archive/refs/heads/download-file.zip)

## Local development

Install the dependencies for both the root app and the frontend:

```bash
npm install
npm install --prefix frontend
```

Start the app in development mode:

```bash
npm run dev
```

Then open:

- Frontend: http://localhost:5173
- API health check: http://localhost:5000/api/health

The frontend dev server proxies API requests to the Express backend running on port 5000.

## Production build

Build the frontend and serve the production output through Express:

```bash
npm run build
npm start
```

Then open:

- App: http://localhost:5000

## Deployment

This project includes a Render configuration in `render.yaml`:

```yaml
services:
  - type: web
    name: Deployable-Express-React-Scaffold
    runtime: node
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm start
```

Deploy by connecting the repository to Render and using the included config.

## Useful scripts

From the root project:

```bash
npm run dev     # run backend + frontend together
npm run server  # run Express in watch mode
npm run client  # run frontend via Vite
npm run build   # install frontend dependencies and build the app
npm start       # start the production Express server
```

## Notes

- The Express app serves `frontend/dist` in production mode.
- The root `server.js` uses Express 5 and serves the frontend fallback route for client-side routing.
- This template is intentionally lightweight and easy to extend for real projects.

## License

This project is provided as a starting template for development and deployment use.
