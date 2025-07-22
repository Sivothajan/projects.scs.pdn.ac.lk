# Backend Documentation

## Common Development Practices

### Core Practices

1. **API Versioning**
   - All endpoints are versioned (v1, v2)
   - Breaking changes require new API version

2. **Data Handling**
   - Use JSON files for local development
   - Use GitHub API for production data
   - Always validate data against schemas

3. **Development Flow**
   - Write OpenAPI specs first
   - Test locally before deployment
   - Use environment variables for configuration

4. **Security Best Practices**
   - Always use CORS protection
   - Validate all input data
   - Protect environment variables
   - Use GitHub authentication

### Technology Stack

- Node.js with Express.js
- OpenAPI/Swagger for API documentation
- GitHub Authentication
- Vercel for deployment

## Project Structure

```text
projects.scs.pdn.ac.lk/
├── api/                    # API routes and controllers
│   ├── data/              # Data files for local development
│   ├── v1/                # Version 1 API endpoints
│   ├── v2/                # Version 2 API endpoints
│   └── apiRouter.js       # Main API router
├── openapi.json           # OpenAPI/Swagger specification
├── openapi.yaml           # OpenAPI/Swagger specification (YAML format)
├── package.json           # Project dependencies and scripts
└── vercel.json           # Vercel deployment configuration
```

## Setup and Installation

### Prerequisites

- Node.js
- npm or yarn

### Development Setup

#### 1. Install dependencies

```bash
npm install
```

#### 2. Configure environment variables

```bash
cp .env.example .env
```

Environment variables:

Required variables:

- `PORT`: Server port number (Default: 3000)
- `USE_LOCAL_DATA`: Set to "true" to use local JSON files, "false" to use GitHub data
- `GITHUB_TOKEN`: GitHub Personal Access Token (Required if USE_LOCAL_DATA=false)

#### 3. Start development server

Choose one of the following options to start the server:

```bash
# Start all API versions concurrently
npm run dev:backend    # Starts main API (3000), v1 (3001), and v2 (3002)

# Start specific API versions
npm run dev:backend:v1 # Start only v1 API on port 3001
npm run dev:backend:v2 # Start only v2 API on port 3002

# For development with frontend
npm run dev           # Starts both frontend and all API versions
```

The servers will be available at:

- Main API: `http://localhost:3000/api`
- V1 API: `http://localhost:3001/api/v1`
- V2 API: `http://localhost:3002/api/v2`

## API Documentation

### Base URLs

- Development:
  - Main API: `http://localhost:3000/api`
  - V1 API: `http://localhost:3001/api/v1` (deprecated)
  - V2 API: `http://localhost:3002/api/v2`
- Production: `https://projects.scs.pdn.ac.lk/api`

### Available Endpoints

#### Root Endpoints

- `GET /api` - Returns API information and available versions
- `GET /api/openapi` or `/api/openapi.json` - OpenAPI specification in JSON format
- `GET /api/openapi.yaml` - OpenAPI specification in YAML format

Example response from root endpoint:

```json
{
  "message": "Projects API",
  "versions": {
    "v1": "/api/v1",
    "v2": "/api/v2"
  }
}
```

#### V1 Endpoints

Data structure in `/data/v1/`:

```text
projects.json    - Project details with course mappings
courses.json     - Course information
instructors.json - Instructor profiles
students.json    - Student information
```

Available endpoints:

- `GET /api/v1/projects` - List all projects
- `GET /api/v1/courses` - List all courses
- `GET /api/v1/instructors` - List all instructors
- `GET /api/v1/students` - List all students

Project data format example:

```json
{
  "id": "CSC1013-2025-001",
  "name": "Basic Programming Challenges",
  "courseCode": "CSC1013",
  "instructor": "sachith-sci",
  "academicYear": 2025,
  "description": "...",
  "projectLink": "https://github.com/pdn-scs/basic-programming"
}
```

#### V2 Endpoints

V2 API follows OpenAPI/Swagger specification. For detailed documentation:

- `openapi.json` - Machine-readable API specification
- `openapi.yaml` - Human-readable API specification

### Response Format

API responses follow these formats:

1. Success Response

```json
{
  "message": "Success message",
  "data": {} // Optional response data
}
```

1. Error Response

```json
{
  "message": "Error description",
  "error": "Error details"
}
```

## Error Handling

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Testing

Currently, there are no automated tests configured. The `test` script in package.json is a placeholder:

```bash
npm test  # Note: Currently exits with "Error: no test specified"
```

Testing TODO:

- Add endpoint testing with Jest or Mocha
- Add data validation tests
- Add API integration tests

## Deployment

The backend is configured for deployment on Vercel with multi-router support:

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Verify vercel.json configuration (already set up for)

- Main API router (api/apiRouter.js)
- V1 API router (api/v1/apiRouter.js)
- V2 API router (api/v2/apiRouter.js)

### 3. Deploy

```bash
vercel
```

The deployment configuration automatically handles routing for all API versions.

## Security

- CORS protection
- JSON body parsing
- Environment variable protection

## Maintenance

- Regular dependency updates
- Security patches
- Performance monitoring
- Error logging

## License

This project is licensed under the MIT License - see the LICENSE file for details.
