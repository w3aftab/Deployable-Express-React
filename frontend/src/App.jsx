import { useEffect, useState } from "react";
import "./App.css";

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
          DEPLOYABLE-EXPRESS-REACT<span>/</span>
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
        <div className="hero-actions">
          <a
            className="button button-primary"
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
          href="https://github.com/w3aftab/Deployable-Express-React"
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
