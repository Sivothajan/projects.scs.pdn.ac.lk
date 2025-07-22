# Student Projects Portfolio Site - Academic Projects

## Course Information

- Course: CSC2102 - Web Programming I (2023/ 2024)

## Project Overview

### Production URLs

[![Deployment Status](https://img.shields.io/github/deployments/sivothajan/projects.scs.pdn.ac.lk/production?label=deployment)](https://projects.scs.pdn.ac.lk)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

- Frontend: [https://projects.scs.pdn.ac.lk](https://projects.scs.pdn.ac.lk)
- Backend API: [https://projects.scs.pdn.ac.lk/api](https://projects.scs.pdn.ac.lk/api)
- Documentation: [https://projects.scs.pdn.ac.lk/documentation](https://projects.scs.pdn.ac.lk/documentation)

### Group Details

- Group Name: The Webmasters
- Number of Members: 11
- Corresponding Member: S/21/513 - Sivothayan .S

### Project Description

This project is designed to support student projects tied to the Department of Statistics & Computer Science, Faculty of Science, University of Peradeniya. It aims to provide a robust platform for students to collaborate, document, and showcase their work in statistics and computer science, fostering innovation and academic excellence.

### Target Audience

- Students
- Academic Staff
- Industry Professionals

## Technical Requirements

### Core Technologies

#### Frontend

- ![React](https://img.shields.io/badge/React-18.x-61dafb) - Modern UI development
- ![Vite](https://img.shields.io/badge/Vite-4.x-646cff) - Fast build tooling
- ![React Router](https://img.shields.io/badge/React_Router-7.x-ca4245) - Client-side routing
- ![CSS Modules](https://img.shields.io/badge/CSS_Modules-Latest-000) - Scoped styling

#### Backend

- ![Node.js](https://img.shields.io/badge/Node.js-18.x-339933) - Runtime environment
- ![Express](https://img.shields.io/badge/Express-4.x-000000) - API framework
- ![OpenAPI](https://img.shields.io/badge/OpenAPI-3.x-6ba539) - API documentation

#### Development Tools

- ![ESLint](https://img.shields.io/badge/ESLint-Latest-4b32c3) - Code quality
- ![Prettier](https://img.shields.io/badge/Prettier-Latest-f7b93e) - Code formatting
- ![Git](https://img.shields.io/badge/Git-Latest-f05032) - Version control
- ![Vercel](https://img.shields.io/badge/Vercel-Latest-000000) - Deployment

### Technical Constraints and Choices

1. Core Requirements
   - Application must run entirely in a web browser
   - Focus on core web development principles and best practices
   - Well-organized and properly documented code

2. Frontend Framework
   - React.js with Vite for enhanced development experience
   - React Router for client-side navigation
   - Component-based architecture for reusability and maintainability
   - CSS Modules for component-level styling
   - Focus on modern JavaScript features and best practices

3. Data Management
   - Static JSON files for data storage
   - No external databases required
   - Client-side data handling and state management

4. Development Tools
   - Vite for fast development and optimized builds
   - ESLint for code quality
   - Git for version control
   - Vercel for deployment

## Team Structure and Responsibilities

| No. | Registration No. | Responsibilities                                              |
| --- | ---------------- | ------------------------------------------------------------- |
| 1   | S/21/063         | Project Page (Making Responsive UI/UX)                        |
| 2   | S/21/315         | About Page (Making Responsive UI/UX)                          |
| 3   | S/21/317         | About Page (Making Responsive UI/UX)                          |
| 4   | S/21/340         | Documentation (Make Documentation Page & Debug CSS)           |
| 5   | S/21/413         | Instructor Page (Making Responsive UI/UX)                     |
| 6   | S/21/466         | Student Page (Making Responsive UI/UX)                        |
| 7   | S/21/489         | Project Page (Making Responsive UI/UX)                        |
| 8   | S/21/490         | UI/UX Testing & Resolve CSS Issues                            |
| 9   | S/21/493         | Project Page (Making Responsive UI/UX)                        |
| 10  | S/21/513         | API Making, Dummy Data Creation & Project Page Logic Handling |
| 11  | S/21/528         | UI/UX Testing & Resolve CSS Issues                            |

## Project Components

### Frontend Structure

1. Project Page
   - Interactive project cards with pure CSS animations
   - Custom-built image gallery
   - Dynamic filtering system using vanilla JavaScript
   - Responsive grid layout using CSS Grid
   - Search functionality with JavaScript

2. About Page
   - Animated timeline implementation
   - Department information with interactive elements
   - Team member showcase with hover effects
   - Responsive design using CSS media queries

3. Documentation Page
   - Interactive documentation browser
   - Syntax highlighting using pure CSS
   - Collapsible sections using JavaScript
   - Search and filter functionality
   - Print-friendly stylesheets

4. (All-in-one) Instructors Page
   - Dynamic faculty profile cards with hover effects
   - Custom-built tabbed interface for faculty details
   - Contact form with JavaScript validation
   - Responsive image handling using CSS

5. Individual Instructor Page
   - Dynamic faculty profile cards
   - Custom-built tabbed interface
   - Contact form with JavaScript validation
   - Responsive image handling

6. Individual Student Page
   - Dynamic student profile cards
   - Custom-built tabbed interface for student details
   - Contact form with JavaScript validation
   - Responsive image handling

7. Individual Course Page
   - Dynamic course profile cards
   - Custom-built tabbed interface for course details
   - Responsive image handling
   - Related projects section

### Project Structure

```text
projects.scs.pdn.ac.lk/
├── api/                    # Backend API implementation
│   ├── data/              # JSON data files for development
│   ├── v1/                # Version 1 API endpoints
│   │   └── apiRouter.js   # V1 API router
│   ├── v2/                # Version 2 API endpoints
│   │   └── apiRouter.js   # V2 API router
│   └── apiRouter.js       # Main API router
├── src/                   # Frontend source code
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── styles/           # Global styles and themes
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── favicon/         # Favicon files
└── config/              # Configuration files
    ├── eslint/          # ESLint configuration
    └── vite/            # Vite configuration

Key files:
- package.json          # Project configuration
- vite.config.js       # Vite build configuration
- vercel.json          # Vercel deployment settings
- .env.example         # Environment variables template
```

### Technical Implementation

1. React + Vite Architecture
   - Modern component-based architecture
   - Hot Module Replacement (HMR) for fast development
   - Optimized production builds with code splitting
   - React Router v7 for client-side navigation
   - TypeScript for type safety

2. HTML and Accessibility
   - Semantic HTML5 elements within React components
   - WAI-ARIA compliant markup
   - SEO optimization
   - Cross-browser compatible implementation

3. CSS and Styling
   - CSS Modules for component-scoped styling
   - Custom responsive layouts using Grid and Flexbox
   - Theme management and dark mode support
   - Mobile-first design approach
   - Custom animations and transitions
   - Dynamic styling with CSS-in-JS

4. React Features
   - Custom hooks for reusable logic
   - Context API for state management
   - Lazy loading for optimized performance
   - Form handling with controlled components
   - Custom event handlers and DOM interactions

5. Performance Optimization
   - Efficient DOM manipulation techniques
   - Image optimization and lazy loading
   - Minimizing reflows and repaints
   - Code splitting for better maintainability

6. Quality Assurance
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile device testing
   - Performance benchmarking
   - Accessibility testing
   - Code review and validation

## Development Guidelines

1. Project Structure
   - Monorepo architecture with separate backend folder (api folder) in the root directory
   - Frontend code organized in a src directory
   - Component-based organization following React best practices
   - Shared utilities and hooks in dedicated directories
   - Static assets management using Vite's public directory
   - Environment configuration for different deployment stages

2. Code Organization
   - Feature-based component structure
   - Reusable components library
   - Shared types and interfaces
   - CSS Modules co-located with components
   - Consistent file naming (PascalCase for components, camelCase for utilities)

3. Development Workflow

```bash
# Install all dependencies
npm run install:all

# Start development servers
npm run dev           # Start all services
npm run dev:frontend  # Frontend only
npm run dev:backend   # All API versions

# Start specific API versions
npm run dev:backend:v1  # V1 API only
npm run dev:backend:v2  # V2 API only

# Build for production
npm run build        # Build all
npm run build:frontend
npm run build:backend

# Deploy
npm run deploy      # Deploy to Vercel
```

Local Development URLs:

- Frontend: `http://localhost:5173`
- Main API: `http://localhost:3000/api`
- V1 API: `http://localhost:3001/api/v1`
- V2 API: `http://localhost:3002/api/v2`
- API Docs: `http://localhost:3000/api/docs`

1. Quality Standards
   - ESLint configuration for code style
   - React best practices and patterns
   - Performance optimization guidelines
   - Cross-browser compatibility requirements
   - Accessibility compliance (WCAG 2.1)

2. Documentation Requirements
   - Component documentation with JSDoc
   - README files for each major directory
   - API documentation for data structures
   - Setup and deployment guides
   - Inline code comments for complex logic

## Timeline and Deliverables

1. Setup Phase (Week 1)
   - Initialize React + Vite project structure
   - Set up ESLint and development tools
   - Create component architecture plan
   - Configure CSS Modules and styling strategy
   - Set up version control and collaboration workflow

2. Core Development Phase (Weeks 2-3)
   - Implement core React components
   - Develop responsive layouts with CSS Modules
   - Create custom hooks for shared functionality
   - Implement client-side routing
   - Set up static data management

3. Feature Implementation Phase (Weeks 3-4)
   - Develop interactive features using React
   - Implement state management
   - Create dynamic filtering and search
   - Add animations and transitions
   - Implement responsive design features

4. Integration and Testing Phase (Week 4)
   - Component integration
   - Cross-browser testing
   - Performance optimization
   - Accessibility testing
   - User testing and feedback

5. Final Phase (Week 5)
   - Bug fixes and refinements
   - Documentation completion
   - Performance benchmarking
   - Final cross-browser validation
   - Deployment preparation and testing
