import express from "express";
import cors from "cors";
import { json } from "express";
import path from "path";

const router = express();

// Middleware
router.use(cors());
router.use(json());

// Root route
router.get(/.*/, (req, res) => {
  if (req.path === "/api/openapi" || req.path === "/api/openapi.json") {
    const openapiJson = path.resolve(process.cwd(), "/openapi.json");
    res.setHeader("Content-Type", "application/json");
    res.json(require(openapiJson));
  }

  if (req.path === "/openapi.yaml") {
    const openapiYaml = path.resolve(process.cwd(), "/openapi.yaml");
    res.setHeader("Content-Type", "application/x-yaml");
    res.sendFile(openapiYaml);
  }

  res.json({
    message: "Projects API",
    versions: {
      v1: "/api/v1",
      v2: "/api/v2",
    },
  });
});

const PORT = process.env.PORT || 3000;
router.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

export default router;
