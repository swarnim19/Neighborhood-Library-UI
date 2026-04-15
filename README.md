# Neighborhood Library UI

Angular front-end for the Library Management API.

Prerequisites
- Node 16+
- npm
- Backend API running (default expected at http://localhost:8000)

Install

```bash
cd Neighborhood-Library-UI
npm install
```

Run development server

```bash
npm start
# opens http://localhost:4200 by default
```

Configure backend
- Edit `src/environments/environment.ts` and set `apiBase` to your backend base URL (e.g., `http://localhost:8000`).

Tests

```bash
npm test
```

Notes
- This is a minimal scaffold focused on API integration and forms. Use Angular CLI to expand components and add Material design.

Production build & Docker

Build the production bundle:

```bash
npm run build
# outputs into dist/neighborhood-library-ui
```

Build the Docker image and run it locally:

```bash
docker build -t neighborhood-library-ui .
docker run --rm -p 8080:80 neighborhood-library-ui
# open http://localhost:8080
```

If you need to serve the built files from a different base path, update the `environment` `apiBase` and rebuild.
# Neighborhood-Library-UI
This repo contains the UI of Neighborhood Library application
