import { useEffect, useState } from "react";
import "./App.css";

const projectStructure = [
  { name: "Deployable-Express-React-Scaffold/", level: 0, type: "directory" },
  { name: "server.js", level: 1, description: "Express server entry point" },
  { name: "render.yaml", level: 1, description: "Render deployment config" },
  {
    name: "package.json",
    level: 1,
    description: "Root scripts and dependencies",
  },
  { name: "README.md", level: 1, description: "Project documentation" },
  { name: "frontend/", level: 1, type: "directory" },
  {
    name: "package.json",
    level: 2,
    description: "Frontend dependencies and scripts",
  },
  { name: "index.html", level: 2, description: "Vite HTML entry" },
  { name: "vite.config.js", level: 2, description: "Vite config" },
  {
    name: "src/",
    level: 2,
    description: "React application source",
    type: "directory",
  },
  {
    name: "public/",
    level: 1,
    description: "Static assets if added later",
    type: "directory",
  },
];

function App() {
  const [apiStatus, setApiStatus] = useState("Checking API");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        if (!response.ok) throw new Error("API unavailable");
        return response.json();
      })
      .then(() => setApiStatus("API online"))
      .catch(() => setApiStatus("API unavailable"));
  }, []);

  return (
    <main className="shell">
      <nav className="nav">
        <span className="brand">
          DEPLOYABLE EXPRESS REACT SCAFFOLD<span>/</span>
        </span>
        <span className="nav-meta">EXPRESS + REACT / 2026</span>
      </nav>
      <section className="hero">
        <p className="eyebrow">DEPLOYMENT READY / 001</p>
        <h1>
          Build with
          <br />
          <em>momentum.</em>
        </h1>
        <p className="lede">
          A focused full-stack starting point for shipping useful software
          without losing the plot.
        </p>
        <p className="hero-description">
          Start with a production-minded foundation: React and Vite power the
          interface, Express handles the API and static delivery, and the
          included Render setup gets your next idea online with less ceremony.
        </p>
        <div className="hero-actions">
          <a
            className="button button-quiet"
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Express <span>↗</span>
          </a>
          <a
            className="button button-quiet"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Read React docs <span>↗</span>
          </a>
          <a
            className="button button-primary"
            href="https://github.com/w3aftab/Deployable-Express-React-Scaffold/archive/e961c892437ef2340f6baf8d019a0e402b7b9886.zip"
            target="_blank"
            rel="noreferrer"
          >
            Download template <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="structure" aria-labelledby="structure-title">
        <div className="structure-heading">
          <span className="signal-index">04 / PROJECT MAP</span>
          <h2 id="structure-title">Project structure</h2>
          <p>The documented foundation, ready to extend.</p>
        </div>
        <div className="tree" role="list">
          {projectStructure.map((item) => (
            <div
              className={`tree-row ${item.type === "directory" ? "is-directory" : ""}`}
              key={`${item.level}-${item.name}`}
              role="listitem"
              style={{ "--tree-level": item.level }}
            >
              <span className="tree-branch" aria-hidden="true">
                {item.level === 0 ? "" : "├─"}
              </span>
              <span className="tree-name">{item.name}</span>
              {item.description && (
                <span className="tree-description"># {item.description}</span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="signal-grid">
        <article className="signal signal-main">
          <span className="signal-index">01 / STATUS</span>
          <div
            className={`status-dot ${apiStatus === "API online" ? "is-live" : ""}`}
          />
          <h2>{apiStatus}</h2>
          <p>
            The browser is talking to your Express server through the same
            origin.
          </p>
        </article>
        <article className="signal">
          <span className="signal-index">02 / CLIENT</span>
          <strong>React 19</strong>
          <p>Fast Vite development and optimized production builds.</p>
        </article>
        <article className="signal">
          <span className="signal-index">03 / SERVER</span>
          <strong>Express 5</strong>
          <p>Health checks, static assets, and a clean API boundary.</p>
        </article>
      </section>
      <footer>
        <span>READY WHEN YOU ARE</span>
        <span>BY AFTAB AHMED</span>
        <a
          href="https://github.com/w3aftab/Deployable-Express-React-Scaffold"
          target="_blank"
          rel="noreferrer"
        >
          VIEW TEMPLATE ON GITHUB <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}

export default App;
