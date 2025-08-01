import styles from "./Documentation.module.css";

function Documentation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Documentation</h1>
      <p className={styles.description}>
        Welcome to the SCS Projects Portal documentation. This guide covers
        essential setup and development information.
      </p>

      <h2 className={styles.subtitle}>Quick Start Guide</h2>
      <h3 className={styles.subsubtitle}>Prerequisites</h3>
      <ul className={styles.list}>
        <li>Node.js (v18.16 or higher)</li>
        <li>npm (v9.5 or higher)</li>
        <li>Git</li>
      </ul>

      <h3 className={styles.subsubtitle}>Setup</h3>
      <ol className={styles.orderedList}>
        <li>
          Clone and install:
          <code className={styles.code}>
            git clone https://github.com/pdn-scs/projects.scs.pdn.ac.lk.git cd
            projects.scs.pdn.ac.lk npm run install:all
          </code>
        </li>
        <li>
          Configure environment:
          <code className={styles.code}>
            # Setup frontend environment cd frontend cp .env.example .env #
            Setup backend environment cd ../backend cp .env.example .env
          </code>
        </li>
      </ol>

      <h3 className={styles.subsubtitle}>Environment Setup</h3>
      <div className={styles.apiEndpoints}>
        <h4 className={styles.envTitle}>Frontend (.env)</h4>
        <ul className={styles.list}>
          <li>
            <code className={styles.code}>VITE_API_URL</code>
            <span className={styles.envDescription}>
              Backend API URL (Default: `http://localhost:3000`)
            </span>
          </li>
        </ul>

        <h4 className={styles.envTitle}>Backend (.env)</h4>
        <ul className={styles.list}>
          <li>
            <code className={styles.code}>PORT</code>
            <span className={styles.envDescription}>
              Server port (Default: 3000)
            </span>
          </li>
          <li>
            <code className={styles.code}>USE_LOCAL_DATA</code>
            <span className={styles.envDescription}>
              Use local JSON files instead of GitHub (Default: false)
            </span>
          </li>
          <li>
            <code className={styles.code}>GITHUB_TOKEN</code>
            <span className={styles.envDescription}>
              GitHub Personal Access Token (Only needed if USE_LOCAL_DATA=false)
            </span>
          </li>
        </ul>
      </div>

      <h2 className={styles.subtitle}>Development</h2>
      <p className={styles.text}>Start all services:</p>
      <code className={styles.code}>
        npm run dev # Starts both frontend and all API versions
      </code>

      <p className={styles.text}>Or start services individually:</p>
      <ul className={styles.list}>
        <li>
          Frontend:
          <code className={styles.code}>
            npm run dev:frontend # Frontend only on port 5173
          </code>
        </li>
        <li>
          Backend:
          <code className={styles.code}>
            # All API versions npm run dev:backend # Starts main API (3000), v1
            (3001), and v2 (3002) # Specific API versions npm run dev:backend:v1
            # Start only v1 API on port 3001 npm run dev:backend:v2 # Start only
            v2 API on port 3002
          </code>
        </li>
      </ul>

      <h3 className={styles.subsubtitle}>Local URLs</h3>
      <ul className={styles.list}>
        <li>
          Frontend: <code className={styles.code}>http://localhost:5173</code>
        </li>
        <li>
          Backend APIs:
          <ul className={styles.sublist}>
            <li>
              Main API:{" "}
              <code className={styles.code}>http://localhost:3000/api</code>
            </li>
            <li>
              V1 API:{" "}
              <code className={styles.code}>http://localhost:3001/api/v1</code>{" "}
              (deprecated)
            </li>
            <li>
              V2 API:{" "}
              <code className={styles.code}>http://localhost:3002/api/v2</code>
            </li>
          </ul>
        </li>
        <li>
          API Documentation:
          <ul className={styles.sublist}>
            <li>
              OpenAPI Spec:{" "}
              <code className={styles.code}>
                http://localhost:3000/api/openapi.json
              </code>
            </li>
            <li>
              YAML Spec:{" "}
              <code className={styles.code}>
                http://localhost:3000/api/openapi.yaml
              </code>
            </li>
          </ul>
        </li>
      </ul>

      <h2 className={styles.subtitle}>Additional Resources</h2>
      <ul className={styles.list}>
        <li>
          <a
            href="https://github.com/pdn-scs/projects.scs.pdn.ac.lk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub Repository
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pdn-scs/projects.scs.pdn.ac.lk/issues"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Issue Tracker
          </a>
        </li>
        <li>
          <a
            href="/api/docs/backend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Backend API Documentation
          </a>
        </li>
        <li>
          <a
            href="/api/docs/data"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Data Structure Documentation
          </a>
        </li>
      </ul>

      <footer className={styles.footer}>
        <p className={styles.authorStamp}>
          © {new Date().getFullYear()} Department of Statistics & Computer
          Science, University of Peradeniya
          <br />
          <a
            href="https://github.com/sivothajan/projects.scs.pdn.ac.lk"
            className={styles.link}
          >
            Source Code
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Documentation;
