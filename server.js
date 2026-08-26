import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5000;
const frontendDist = path.join(__dirname, "frontend", "dist");

app.disable("x-powered-by");
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "deployable-express-react-api",
    timestamp: new Date().toISOString(),
  });
});

app.use(express.static(frontendDist));
app.get("*splat", (_request, response) => {
  response.sendFile(path.join(frontendDist, "index.html"));
});

app.listen(port, () => {
  console.log(`Deployable-Express-React server listening on port ${port}`);
});
