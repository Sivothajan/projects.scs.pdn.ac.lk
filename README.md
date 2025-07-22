# SCS Projects Portal

A centralized platform for managing and showcasing student projects from the Department of Statistics & Computer Science, University of Peradeniya.

## Quick Start

### Prerequisites

- Node.js (v18.16 or higher)
- npm (v9.5 or higher)
- Git

### Installation

1. Clone and Install Dependencies:

   ```bash
   git clone https://github.com/pdn-scs/projects.scs.pdn.ac.lk.git
   cd projects.scs.pdn.ac.lk
   npm run install:all
   ```

2. Environment Setup:

   ```bash
   # Setup frontend environment
   cd frontend
   cp .env.example .env

   # Setup backend environment
   cd ../backend
   cp .env.example .env
   ```

Required environment variables:

Frontend (.env):

- `VITE_API_URL` - Backend API URL (Default: <http://localhost:3000>)

Backend (.env):

- `PORT` - Server port (Default: 3000)
- `USE_LOCAL_DATA` - Use local JSON files (Default: false)
- `GITHUB_TOKEN` - GitHub Personal Access Token (Only if USE_LOCAL_DATA=false)

### Development

Start all services:

```bash
npm run dev          # Starts both frontend and all API versions
```

Or individual services:

```bash
# Frontend
npm run dev:frontend  # Frontend only on port 5173

# Backend
npm run dev:backend    # All API versions (main:3000, v1:3001, v2:3002)
npm run dev:backend:v1 # Only v1 API on port 3001
npm run dev:backend:v2 # Only v2 API on port 3002
```

Access your local instance:

- Frontend: `http://localhost:5173`
- Backend APIs:
  - Main API: `http://localhost:3000/api`
  - V1 API: `http://localhost:3001/api/v1` (deprecated)
  - V2 API: `http://localhost:3002/api/v2`
- API Documentation:
  - OpenAPI Spec: `http://localhost:3000/api/openapi.json`
  - YAML Spec: `http://localhost:3000/api/openapi.yaml`

## Documentation

- [Backend API Documentation](./api/README.md)
- [Data Structure Documentation](./api/data/README.md)

## Project Structure

```text
projects.scs.pdn.ac.lk/
├── api/                    # Backend API implementation
│   ├── data/              # Data files for local development
│   ├── v1/                # Version 1 API endpoints (deprecated)
│   ├── v2/                # Version 2 API endpoints
│   └── apiRouter.js       # Main API router
├── src/                   # Frontend source code
├── public/                # Static assets
├── package.json           # Project configuration
└── vercel.json           # Vercel deployment configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - See [LICENSE](./LICENSE) file
